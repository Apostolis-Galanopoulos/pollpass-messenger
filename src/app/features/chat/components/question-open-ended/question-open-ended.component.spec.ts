import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Kind } from '@app/core/enums/kind.enum';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { SocketService } from '@app/core/web-socket/socket.service';
import { FormService } from '../../services/form.service';
import { MessageService } from '../../services/message.service';

import { QuestionOpenEndedComponent } from './question-open-ended.component';

const message: Message = {
  "kind": Kind.question,
  "id": "ec411c10-f6bb-11ec-b460-e362688fa70d",
  "name_html": "<p>What&#39;s your favourite film of all time?</p>",
  "question_id": "32b5f0aa-9cc9-4048-8676-0dc46654a59a",
  "question_type": QuestionType.openEndedQuestion,
  "display_type": "auto",
  "question_options": [
      {
          "id": "56a049d6-f7d9-49eb-b413-deb9771fdf89",
          "nota": false,
          "open_ended": true,
          "name_html": "<p>Please specify</p>"
      }
  ],
  "created_at": "2022-06-28T08:25:52.466Z"
}

describe('QuestionOpenEndedComponent', () => {
  let component: QuestionOpenEndedComponent;
  let fixture: ComponentFixture<QuestionOpenEndedComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SocketService', ['subject$']);
    await TestBed.configureTestingModule({
      declarations: [ QuestionOpenEndedComponent ],
      providers: [
        FormService,
        FormBuilder,
        MessageService,
        { provide: SocketService, useValue: spy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOpenEndedComponent);
    component = fixture.componentInstance;
    component.message = message;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
