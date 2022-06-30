import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kind } from '@app/core/enums/kind.enum';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { MessageService } from '../../services/message.service';
import { SocketService } from '@app/core/web-socket/socket.service';
import { SafeHtmlPipe } from '@app/shared/pipes/safe-html.pipe';

import { QuestionRadioComponent } from './question-radio.component';

const message: Message = {
  "kind": Kind.question,
  "id": "383ee510-f6cc-11ec-b460-e362688fa70d",
  "name_html": "<p>Which of these superpowers would you most like to have?</p>",
  "question_id": "aaef8beb-9749-45cc-bd5b-071c1e2c0e25",
  "question_type": QuestionType.radioQuestion,
  "display_type": "auto",
  "question_options": [
      {
          "id": "363fa250-8672-40f4-b7cb-0f4476f11640",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Flight</p>"
      },
      {
          "id": "27e4f507-450c-46e6-a5f9-4e203241b103",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Telepathy</p>"
      },
      {
          "id": "aa66e453-f18f-42d3-ab8b-70c653cd76dd",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Super Speed</p>"
      },
      {
          "id": "9181d52f-a375-4cfb-8dfb-66d6af738016",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Invisibility</p>"
      },
      {
          "id": "1d7572df-aa03-403a-a54f-1e3e1c90b861",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Talking to Animals</p>"
      },
      {
          "id": "9c1e32b0-a7c2-4369-a6fe-ea4f8e99da2c",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Intangibility</p>"
      },
      {
          "id": "0e1bf24b-700e-4a05-b1da-fe3c8f936838",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Force Field</p>"
      },
      {
          "id": "04d70da2-90c2-44b6-bfc3-bff80a3f145f",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Super Smart</p>"
      },
      {
          "id": "2269fa53-ecdb-40b3-b62a-8c12257dff74",
          "nota": true,
          "open_ended": false,
          "name_html": "<p>None of the above</p>"
      }
  ],
  "created_at": "2022-06-28T10:22:31.906Z"
};

describe('QuestionRadioComponent', () => {
  let component: QuestionRadioComponent;
  let fixture: ComponentFixture<QuestionRadioComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SocketService', ['subject$']);
    const spyMessage = jasmine.createSpyObj('MessageService', ['subject$']);
    await TestBed.configureTestingModule({
      declarations: [ QuestionRadioComponent, SafeHtmlPipe],
      providers: [
        { provide: MessageService, useValue: spyMessage },
        { provide: SocketService, useValue: spy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRadioComponent);
    component = fixture.componentInstance;
    component.message = message;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
