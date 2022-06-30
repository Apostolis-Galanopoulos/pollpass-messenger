import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'pipeSafeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor (private readonly sanitizer: DomSanitizer) { }

  transform (html: string) {
      if (html) {
          return this.sanitizer.bypassSecurityTrustHtml(html);
      } else {
          return '';
      }

  }

}
