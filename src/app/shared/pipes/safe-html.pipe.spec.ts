import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        providers: [
          DomSanitizer
        ]
      });
  });

  it('create an instance', () => {
    const sanitizer: DomSanitizer = TestBed.get(DomSanitizer);
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
