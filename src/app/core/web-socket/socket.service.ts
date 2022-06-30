import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { USER_SESSION } from '../constants/constants';
import { Kind } from '../enums/kind.enum';
import { Message } from '../models/message.model';
import { Socket } from '../models/socket.model';
import { ChatService } from '../services/chat.service';
import { addMessage } from '../state/actions/pm.action';
import { SessionStorageService } from '../storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private wss: string = environment.wss;
  subject$: Subject<Socket> = new Subject<Socket>();
  private baseUrl = this.wss.replace('session_id', this.sessionStorageService.getSession(USER_SESSION));

  constructor (
    private readonly sessionStorageService: SessionStorageService,
    private readonly chatService: ChatService,
    private readonly store: Store<Message>,
  ) { }

  connect () {
    this.subject$ = webSocket(this.baseUrl);
    this.subject$.
    pipe(
      map((data) => {
        const message = data as Message;
        if (message.kind === Kind.history && message.messages) {
          this.chatService.messages(message.messages);
          return message.messages;
        } else {
          this.chatService.handleMessage(message);
          this.store.dispatch(addMessage({ message: message }));
          return message;
        }
      })
    ).
    subscribe({
      next: () => { }, // Called whenever there is a message from the server.
      error: err => { // Called if at any point WebSocket API signals some kind of error.
        if (err.type === 'close') {
           this.connect();
        }
       },
      complete: () => { } // Called when connection is closed (for whatever reason).
    });
  }
}
