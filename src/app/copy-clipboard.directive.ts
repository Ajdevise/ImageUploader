import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[copy-clipboard]'
})
export class CopyClipboardDirective {

  constructor() { }

  @Input("copy-clipboard") payload: string;
  @Output("copied") copied: EventEmitter<String> = new EventEmitter<String>();
  @HostListener("click", ["$event"]) onClick(event: MouseEvent): void {
    event.preventDefault();
    if(!this.payload) return;

    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", this.payload.toString());
      e.preventDefault();

      this.copied.emit(this.payload);
    }

    document.addEventListener("copy", listener, false);
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }
}
