import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from '@app/core/models/message.model';
import { selectAllMessages } from '@app/core/state/selectors/pm.selector';
import { select, Store } from '@ngrx/store';
import { takeUntil, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DeliveryAnswers } from '../models/delivery-answer.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'pm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  messages$: Observable<Message[]> | undefined;
  answers!: DeliveryAnswers;
  submitted: boolean = false;
  constructor (
    private readonly store: Store<Message>,
    private readonly messageService: MessageService
  ) {
    this.messages$ = this.store.pipe(select(selectAllMessages));
   }

  ngOnInit (): void {
    this.messageService.answers$
    .pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.answers = data;
        if (data.autoSend) {
          this.submit();
        }  else if (Object.keys(data.answers).length !== 0) {
          this.submitted = true;
        } else {
          this.submitted = false;
        }
      })
    )
    .subscribe();
  }

  trackByFn (_index: number, message: Message) {
    return message.id;
  }
  submit () {
    this.submitted = false;
    this.messageService.reply(this.answers);
  }
  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
