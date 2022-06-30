import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Message } from '@app/core/models/message.model';
import { QuestionOption } from '@app/core/models/question-options.model';
import { DeliveryAnswers } from '../../models/delivery-answer.model';
import { FormService } from '../../services/form.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'pm-question-open-ended',
  templateUrl: './question-open-ended.component.html',
  styleUrls: ['./question-open-ended.component.scss'],
  providers: [FormService]
})
export class QuestionOpenEndedComponent implements OnInit {

  form!: FormGroup;
  @Input() message!: Message;
  constructor (
    private readonly formService: FormService,
    private readonly messageService: MessageService,
  ) { }

  ngOnInit (): void {
    this.form = this.formService.inputForm();
  }
  update (answers: QuestionOption) {
    const collection: { [x: string]: string; } = {};
    this.message.question_options?.forEach((question: QuestionOption) => {
      if (answers.id === question.id) {
        collection[question.id] = this.form.value.input;
      }
    });
    const deliveryAnswers: DeliveryAnswers = {
      answers: collection,
      message: this.message,
      autoSend: true,
    };
    this.messageService.answers$.next(deliveryAnswers);
  }
}
