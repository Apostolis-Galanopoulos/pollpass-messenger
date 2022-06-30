import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@app/core/models/message.model';
import { QuestionOption } from '@app/core/models/question-options.model';
import { RadioGroup } from '@app/shared/elements/radio-group/radio-group.model';
import { DeliveryAnswers } from '../../models/delivery-answer.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'pm-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss'],
})
export class QuestionRadioComponent implements OnInit {

  @Input() message!: Message;
  options: RadioGroup[] = [];
  constructor (
    private readonly messageService: MessageService
  ) { }

  ngOnInit (): void {
    this.message.question_options?.forEach((item: QuestionOption) => {
      this.options.push({
        key: item.id,
        value: item.name_html,
        data: item
      });
    });
  }
  optionsChanged (option: RadioGroup): void {
    const answers = {
      [option.key]: ''
    };
    const deliveryAnswers: DeliveryAnswers = {
      answers,
      message: this.message
    };
    this.messageService.answers$.next(deliveryAnswers);
  }
}
