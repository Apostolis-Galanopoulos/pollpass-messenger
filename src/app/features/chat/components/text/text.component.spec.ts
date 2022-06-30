import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kind } from '@app/core/enums/kind.enum';
import { Message } from '@app/core/models/message.model';
import { SafeHtmlPipe } from '@app/shared/pipes/safe-html.pipe';

import { TextComponent } from './text.component';

const message: Message = {
  "kind": Kind.statement,
  "id": "bba5dc20-f6b7-11ec-b460-e362688fa70d",
  "created_at": "2022-06-28T07:55:52.938Z",
  "name_html": "<p>Hello</p>"
};

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent, SafeHtmlPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    component.message = message;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be has an appropriate message text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')).toBeTruthy();
    expect(compiled.querySelector('div')?.innerHTML).toContain('Hello');
  });
});
