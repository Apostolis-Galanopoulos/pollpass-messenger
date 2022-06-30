import { MESSAGE_STATE } from '@app/core/constants/constants';
import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { IMessageState } from '../message-state';
import * as fromMessage from '../reducers/pm.reducer';

export interface IState {
  messages: IMessageState;
}

export const reducers: ActionReducerMap<IState> = {
  messages: fromMessage.messageReducer,
};

export const selectMessageState = createFeatureSelector<IMessageState>(MESSAGE_STATE);

export const selectMessageIds = createSelector(
  selectMessageState,
  fromMessage.selectMessageIds
);
export const selectMessageEntities = createSelector(
  selectMessageState,
  fromMessage.selectMessageEntities
);

export const selectAllMessages = createSelector(
  selectMessageState,
  fromMessage.selectAllMessages
);
export const selectMessageTotal = createSelector(
  selectMessageState,
  fromMessage.selectMessageTotal
);
export const selectCurrentMessageId = createSelector(
  selectMessageState,
  fromMessage.getSelectedMessageId
);

export const selectCurrentMessage = createSelector(
  selectMessageEntities,
  selectCurrentMessageId,
  (MessageEntities, MessageId) => MessageId && MessageEntities[MessageId]
);
