import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pmMessageAnchor]'
})
export class MessageAnchorDirective {

  constructor (public viewContainerRef: ViewContainerRef) { }

}
