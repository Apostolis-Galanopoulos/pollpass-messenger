import { Message } from '@app/core/models/message.model';

export type DeliveryAnswers = {
  answers: { [x: string]: string; },
  message: Message,
  autoSend?: boolean
};
