import { Kind } from '@app/core/enums/kind.enum';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { Dictionary } from '@ngrx/entity';
import { addMessage, updateMessageByQuestionId } from '../actions/pm.action';
import { IMessageState } from '../message-state';
import * as fromMessage from '../reducers/pm.reducer';

const message: Message = {
  "kind": Kind.statement,
  "id": "bba5dc20-f6b7-11ec-b460-e362688fa70d",
  "created_at": "2022-06-28T07:55:52.938Z",
  "name_html": "<p>Hello</p>"
};

describe('Messages - Reducer', () => {

  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromMessage;
      const action = {
        type: 'Unknown'
      };
      const state = fromMessage.messageReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('add Message action', () => {
    it('should add the state in an immutable way', () => {
      const { initialState } = fromMessage;
      const messageDictionary: Dictionary<Message> = {
        'bba5dc20-f6b7-11ec-b460-e362688fa70d': message
      };
      const newState: IMessageState = {
        ids: ['bba5dc20-f6b7-11ec-b460-e362688fa70d'],
        selectedMessageId: null,
        entities: messageDictionary
      };
      const action = addMessage({ message: message });
      const state = fromMessage.messageReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('updateMessageByQuestionId action', () => {
    let state;

    const question: Message = {
      "kind": Kind.question,
      "id": "a876a660-f86b-11ec-af1f-9bbf25fe2dda",
      "name_html": "<p>Which of these superpowers would you most like to have?</p>",
      "question_id": "aaef8beb-9749-45cc-bd5b-071c1e2c0e25",
      "question_type": QuestionType.radioQuestion,
      "display_type": "auto",
      "question_options": [],
      "created_at": "2022-06-30T11:56:21.319Z"
    };
    const answerView: Message = {
      "kind": Kind.answerView,
      "id": "16652909-dd2c-4bca-837a-57b0787ac00c",
      "created_at": "2022-06-30T11:57:37.738Z",
      "answers": [
        {
          "id": "27e4f507-450c-46e6-a5f9-4e203241b103",
          "name_html": "<p>Telepathy</p>",
          "value": ""
        }
      ],
      "name_html": '',
      "question_id": "aaef8beb-9749-45cc-bd5b-071c1e2c0e25"
    };

    const messageDictionary: Dictionary<Message> = {
      'a876a660-f86b-11ec-af1f-9bbf25fe2dda': question,
      '16652909-dd2c-4bca-837a-57b0787ac00c': answerView
    };
    const newState: IMessageState = {
      ids: ['a876a660-f86b-11ec-af1f-9bbf25fe2dda', '16652909-dd2c-4bca-837a-57b0787ac00c'],
      selectedMessageId: null,
      entities: messageDictionary
    };
    it('should update the state in an immutable way', () => {

      const action = updateMessageByQuestionId({ data: answerView });
      state = fromMessage.messageReducer(newState, action);
      expect(state.ids.length).toEqual(2);
      expect(state.entities['a876a660-f86b-11ec-af1f-9bbf25fe2dda']?.kind).toEqual(Kind.questionDone);
    });
  });

});
