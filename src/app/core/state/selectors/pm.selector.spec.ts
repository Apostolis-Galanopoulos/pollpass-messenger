import { Kind } from '@app/core/enums/kind.enum';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { Dictionary } from '@ngrx/entity';
import { IMessageState } from '../message-state';
import * as fromSelectors from './pm.selector';

describe('Messages - Selectors', () => {

  it('should select all messages', () => {
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
    const initialState: IMessageState = {
      ids: ['a876a660-f86b-11ec-af1f-9bbf25fe2dda', '16652909-dd2c-4bca-837a-57b0787ac00c'],
      selectedMessageId: null,
      entities: messageDictionary
    };
    const result = fromSelectors.selectAllMessages.projector(initialState);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(question);
    expect(result[1]).toEqual(answerView);
  });
});
