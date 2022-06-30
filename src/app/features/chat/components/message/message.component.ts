import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Kind } from '@app/core/enums/kind.enum';
import { Message } from '@app/core/models/message.model';
import { MessageAnchorDirective } from '@app/shared/directives/message-anchor.directive';
import { AnswerViewComponent } from '../answer-view/answer-view.component';
import { QuestionComponent } from '../question/question.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'pm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() message!: Message;
  @ViewChild(MessageAnchorDirective, { static: true }) pmMessageAnchor!: MessageAnchorDirective;
  public kind = Kind;
  constructor (
    private readonly cd: ChangeDetectorRef
  ) { }
  ngOnChanges (changes: SimpleChanges): void {
    if (
      changes['message'].currentValue !== changes['message'].previousValue &&
      !changes['message'].firstChange) {
      this.loadOrUpdateComponent();
      this.cd.detectChanges();
    }
  }

  ngOnInit (): void {
    this.loadOrUpdateComponent();
  }

  loadOrUpdateComponent () {

    const viewContainerRef = this.pmMessageAnchor.viewContainerRef;
    viewContainerRef.clear();
    let componentRef;
    if (this.message.kind === this.kind.statement || this.message.kind === this.kind.questionDone) {
      componentRef = viewContainerRef.createComponent<TextComponent>(TextComponent);
    } else if (this.message.kind === this.kind.question) {
      componentRef = viewContainerRef.createComponent<QuestionComponent>(QuestionComponent);
    } else if (this.message.kind === this.kind.answerView) {
      componentRef = viewContainerRef.createComponent<AnswerViewComponent>(AnswerViewComponent);
    }

    if (componentRef) {
      componentRef.instance.message = this.message;
    }

  }

}
