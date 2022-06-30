import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { MessageAnchorDirective } from '@app/shared/directives/message-anchor.directive';
import { QuestionMultipleComponent } from '../question-multiple/question-multiple.component';
import { QuestionOpenEndedComponent } from '../question-open-ended/question-open-ended.component';
import { QuestionRadioComponent } from '../question-radio/question-radio.component';

@Component({
  selector: 'pm-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() message!: Message;
  @ViewChild(MessageAnchorDirective, { static: true }) pmMessageAnchor!: MessageAnchorDirective;
  private questionType = QuestionType;
  constructor () { }

  ngOnInit (): void {
    this.loadComponent();
  }
  loadComponent () {

    const viewContainerRef = this.pmMessageAnchor.viewContainerRef;
    viewContainerRef.clear();
    let componentRef;
    if (this.message.question_type === this.questionType.radioQuestion) {
      componentRef = viewContainerRef.createComponent<QuestionRadioComponent>(QuestionRadioComponent);
    } else if (this.message.question_type === this.questionType.multipleQuestion) {
      componentRef = viewContainerRef.createComponent<QuestionMultipleComponent>(QuestionMultipleComponent);
    }  else if (this.message.question_type === this.questionType.openEndedQuestion) {
      componentRef = viewContainerRef.createComponent<QuestionOpenEndedComponent>(QuestionOpenEndedComponent);
    }

    if (componentRef) {
      componentRef.instance.message = this.message;
    }
  }
}
