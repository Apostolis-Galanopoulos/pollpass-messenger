import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Kind } from '../enums/kind.enum';
import { Message } from '../models/message.model';
import { addMessage, updateMessageByQuestionId } from '../state/actions/pm.action';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor (
    private readonly store: Store<Message>,
  ) { }

  messages (data: Message[]) {
    data.forEach((message: Message) => {
      this.handleMessage(message);
    });
  }

  handleMessage (data: Message) {
    if (
      data.kind === Kind.statement ||
      data.kind === Kind.question
    ) {
      this.store.dispatch(addMessage({ message: data }));
    } else if (data.kind === Kind.answerView) {
      this.store.dispatch(addMessage({ message: data }));
      this.store.dispatch(updateMessageByQuestionId({ data }));
    }
  }
}
