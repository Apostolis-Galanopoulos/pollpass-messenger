import { Component, Input } from '@angular/core';
import { Answers } from '@app/core/models/answers.model';
import { Message } from '@app/core/models/message.model';

@Component({
  selector: 'pm-answer-view',
  templateUrl: './answer-view.component.html'
})
export class AnswerViewComponent {

  @Input() message!: Message;
  trackByFn (_index: number, message: Answers) {
    return message.id;
  }
}
