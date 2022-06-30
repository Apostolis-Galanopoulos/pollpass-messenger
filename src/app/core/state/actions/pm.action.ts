import { Message } from '@app/core/models/message.model';
import { createAction, props } from '@ngrx/store';

export const ADD_MESSAGE = '[Message/SOCKET] Add Message';
export const UPDATE_MESSAGE_BY_QUESTION_ID = '[Message]  Update Message By question ID';

export const addMessage = createAction(ADD_MESSAGE, props<{ message: Message }>());
export const updateMessageByQuestionId = createAction(UPDATE_MESSAGE_BY_QUESTION_ID, props<{ data: Message }>());
