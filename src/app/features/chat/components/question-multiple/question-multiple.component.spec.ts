import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Kind } from '@app/core/enums/kind.enum';
import { QuestionType } from '@app/core/enums/question-type.enum';
import { Message } from '@app/core/models/message.model';
import { SocketService } from '@app/core/web-socket/socket.service';
import { FormService } from '../../services/form.service';
import { MessageService } from '../../services/message.service';

import { QuestionMultipleComponent } from './question-multiple.component';

const message: Message = {
  "kind": Kind.question,
  "id": "c3b43ce0-f6b7-11ec-b460-e362688fa70d",
  "name_html": "<p>Which of these Marvel films have you watched?</p>",
  "question_id": "7880846e-adb0-45f5-b080-f6a22ec8d819",
  "question_type": QuestionType.multipleQuestion,
  "display_type": "auto",
  "question_options": [
      {
          "id": "6a84f6e8-ed97-4fbe-afb6-4849e2e5326b",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Doctor Strange</p>"
      },
      {
          "id": "3513d3d0-60af-46e0-ac79-469c50491a4b",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Morbius</p>"
      },
      {
          "id": "6752d1b1-fa22-4e2d-8d8f-b8ff4a99c5b6",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Iron Man</p>"
      },
      {
          "id": "00893faa-cd21-4bbd-839f-66b4a73db9a5",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Deadpool</p>"
      },
      {
          "id": "80e3b759-3e2f-4714-ada4-f4b963a3bead",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Fantastic Four</p>"
      },
      {
          "id": "6ae5a8a9-2426-4068-8613-2d259a7104d1",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Thor</p>"
      },
      {
          "id": "12992aab-ead8-41b9-b0f8-0bc6c7551068",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>Guardians of the Galaxy</p>"
      },
      {
          "id": "8fd85a6a-4b04-4771-80a7-66e02f706649",
          "nota": false,
          "open_ended": false,
          "name_html": "<p>X-Men</p>"
      },
      {
          "id": "fa96a3ad-30da-403a-b134-501fdc43336e",
          "nota": true,
          "open_ended": false,
          "name_html": "<p>None of the above</p>"
      }
  ],
  "created_at": "2022-06-28T07:56:06.447Z"
}

describe('QuestionMultipleComponent', () => {
  let component: QuestionMultipleComponent;
  let fixture: ComponentFixture<QuestionMultipleComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SocketService', ['subject$']);
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultipleComponent ],
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
    fixture = TestBed.createComponent(QuestionMultipleComponent);
    component = fixture.componentInstance;
    component.message = message;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
