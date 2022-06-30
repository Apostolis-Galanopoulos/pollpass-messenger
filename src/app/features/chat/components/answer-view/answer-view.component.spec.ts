import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kind } from '@app/core/enums/kind.enum';
import { Answers } from '@app/core/models/answers.model';
import { Message } from '@app/core/models/message.model';
import { SafeHtmlPipe } from '@app/shared/pipes/safe-html.pipe';

import { AnswerViewComponent } from './answer-view.component';

const message: Message = {
  "kind": Kind.answerView,
  "id": "033f96af-11aa-4653-8c30-520f476357e4",
  "created_at": "2022-06-28T07:56:05.411Z",
  "answers": [
      {
          "id": "aa66e453-f18f-42d3-ab8b-70c653cd76dd",
          "name_html": "<p>Super Speed</p>",
          "value": ""
      }
  ],
  "question_id": "aaef8beb-9749-45cc-bd5b-071c1e2c0e25",
  'name_html': ''
};

describe('AnswerViewComponent', () => {
  let component: AnswerViewComponent;
  let fixture: ComponentFixture<AnswerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerViewComponent, SafeHtmlPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerViewComponent);
    component = fixture.componentInstance;
    component.message = message;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendered a value from name_html property', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')).toBeTruthy();
    expect(compiled.querySelector('div')?.innerHTML).toContain('Super Speed');
  });
  it('should be rendered a value from value property', () => {
    message.answers?.map((item: Answers) => {
      item.value = "Super Speed";
      return item;
    })
    component.message = message;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')).toBeTruthy();
    expect(compiled.querySelector('div')?.innerHTML).toContain('Super Speed');
  });
});
