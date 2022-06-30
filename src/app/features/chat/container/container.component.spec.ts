import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IMessageState } from '@app/core/state/message-state';
import { SafeHtmlPipe } from '@app/shared/pipes/safe-html.pipe';
import { ContainerComponent } from './container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Message } from '@app/core/models/message.model';
import { Kind } from '@app/core/enums/kind.enum';
import { Dictionary } from '@ngrx/entity';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { MessageService } from '../services/message.service';
import { selectAllMessages } from '@app/core/state/selectors/pm.selector';
import { MessageComponent } from '../components/message/message.component';
import { MessageAnchorDirective } from '@app/shared/directives/message-anchor.directive';
import { QuestionComponent } from '../components/question/question.component';

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

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let store: MockStore<IMessageState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent, SafeHtmlPipe, MessageComponent, MessageAnchorDirective, QuestionComponent],
      providers: [
        MessageService,
        provideMockStore({ initialState })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('selectors', () => {
    beforeEach(() => {
      store.overrideSelector(selectAllMessages, [
        question
      ]);

      fixture.detectChanges();
    });
    it('select all messages', (done: DoneFn) => {

      store.refreshState();
      fixture.detectChanges();

      component.messages$?.subscribe(
        (messages: Message[]) => {
          expect(messages.length).toEqual(1);
          done();
        },
        done.fail
      );
    });
  });

});
