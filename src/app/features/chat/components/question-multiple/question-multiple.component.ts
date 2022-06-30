import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Message } from '@app/core/models/message.model';
import { QuestionOption } from '@app/core/models/question-options.model';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { DeliveryAnswers } from '../../models/delivery-answer.model';
import { FormService } from '../../services/form.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'pm-question-multiple',
  templateUrl: './question-multiple.component.html',
  styleUrls: ['./question-multiple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormService]
})
export class QuestionMultipleComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  @Input() message!: Message;
  options!: FormArray;
  form!: FormGroup;
  clearAllId!: string;
  constructor (
    private readonly formService: FormService,
    private readonly messageService: MessageService
  ) { }
  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit (): void {
    this.formService.addMultipleOption(this.message.question_options as QuestionOption[]);
    this.message.question_options?.forEach((question: QuestionOption) => {
      if (question.nota) {
        this.clearAllId = question.id;
      }
    });
    this.form = this.formService.form;
    this.form.valueChanges.
      pipe(tap((options) => {
        this.collectAnswers(options);
      }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
  clicked (options: QuestionOption) {
    if (options.id === this.clearAllId) {
      this.message.question_options?.forEach((question: QuestionOption) => {
        if (question.id !== this.clearAllId) {
          this.form.get(question.id)?.setValue(false);
        }
      });
    } else {
      this.form.get(this.clearAllId)?.setValue(false);
    }
  }
  collectAnswers (answers: { [x: string]: string; }) {
    const collection: { [x: string]: string; } = {};
    this.message.question_options?.forEach((question: QuestionOption) => {
      if (answers[question.id]) {
        collection[question.id] = '';
      }
    });
    const deliveryAnswers: DeliveryAnswers = {
      answers: collection,
      message: this.message
    };
    this.messageService.answers$.next(deliveryAnswers);
  }

}
