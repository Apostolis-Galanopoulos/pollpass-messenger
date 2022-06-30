import { EntityState } from '@ngrx/entity';
import { Message } from '../models/message.model';

export interface IMessageState extends EntityState<Message> {
    // additional entities state properties
    selectedMessageId: string | null;
}
