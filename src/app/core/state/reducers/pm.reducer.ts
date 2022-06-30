import { Kind } from '@app/core/enums/kind.enum';
import { Message } from '@app/core/models/message.model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';
import * as MessageActions from '../actions/pm.action';
import { IMessageState } from '../message-state';

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: IMessageState = adapter.getInitialState({
    selectedMessageId: null,
});

export const messageReducer = createReducer(
    initialState,
    on(MessageActions.addMessage, (state, { message }) => {
        return adapter.addOne(message, state);
    }),
    on(MessageActions.updateMessageByQuestionId, (state, { data }) => {
      const tempState = cloneDeep(state);
      Object.keys(tempState.entities).forEach((id: string) => {
          if (
              tempState.entities[id]?.question_id === data.question_id &&
              tempState.entities[id]?.kind === Kind.question
            ) {
              (tempState.entities[id] as Message).kind = Kind.questionDone;
          }
      });
       return tempState;
  }),
);

export const getSelectedMessageId = (state: IMessageState) => state.selectedMessageId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Message ids
export const selectMessageIds = selectIds;

// select the dictionary of Message entities
export const selectMessageEntities = selectEntities;

// select the array of Messages
export const selectAllMessages = selectAll;

// select the total Message count
export const selectMessageTotal = selectTotal;
