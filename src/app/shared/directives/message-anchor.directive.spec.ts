import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MessageAnchorDirective } from './message-anchor.directive';

describe('MessageAnchorDirective', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        providers: [
          ViewContainerRef
        ]
      });
  });
  it('should create an instance', () => {
    const viewContainerRef: ViewContainerRef = TestBed.get(ViewContainerRef);
    const directive = new MessageAnchorDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
