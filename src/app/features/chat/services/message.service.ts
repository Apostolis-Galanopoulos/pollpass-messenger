import { Injectable } from '@angular/core';
import { Kind } from '@app/core/enums/kind.enum';
import { DeliveryMessage } from '@app/core/models/delivery-message.model';
import { uuIdv4 } from '@app/core/utils/uuidv4';
import { SocketService } from '@app/core/web-socket/socket.service';
import moment from 'moment';
import { Subject } from 'rxjs';
import { DeliveryAnswers } from '../models/delivery-answer.model';

@Injectable()
export class MessageService {

  answers$: Subject<DeliveryAnswers> = new Subject();
  constructor (
    private readonly socketService: SocketService
  ) { }

   reply (option: DeliveryAnswers) {
    const data: DeliveryMessage = {
      answers: option.answers,
      created_at: moment().format(),
      kind: Kind.answer,
      id: uuIdv4(),
      meta: {
        'quick': false,
        'direct': false,
        'indecisive': false,
        'shown_at': 1655919770607,
        'answered_at': 1655919779728,
        'screen_resolution_width': 1920,
        'screen_resolution_height': 1080,
        'device_pixel_ratio': 1,
        'window_resolution_width': 1920,
        'window_resolution_height': 979
    },
      question_id: option.message.question_id as string,
    };

    this.socketService.subject$.next(data);
   }
}
