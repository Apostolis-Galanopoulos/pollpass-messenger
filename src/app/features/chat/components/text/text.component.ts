import { Component, Input } from '@angular/core';
import { Message } from '@app/core/models/message.model';

@Component({
  selector: 'pm-text',
  templateUrl: './text.component.html'
})
export class TextComponent {

  @Input() message!: Message;
}
