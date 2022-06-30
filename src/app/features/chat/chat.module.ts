import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { ChatRoutingModule } from './chat-routing.module';
import { AnswerViewComponent } from './components/answer-view/answer-view.component';
import { MessageComponent } from './components/message/message.component';
import { QuestionMultipleComponent } from './components/question-multiple/question-multiple.component';
import { QuestionOpenEndedComponent } from './components/question-open-ended/question-open-ended.component';
import { QuestionRadioComponent } from './components/question-radio/question-radio.component';
import { QuestionComponent } from './components/question/question.component';
import { TextComponent } from './components/text/text.component';
import { ContainerComponent } from './container/container.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    ContainerComponent,
    MessageComponent,
    TextComponent,
    QuestionComponent,
    QuestionRadioComponent,
    AnswerViewComponent,
    QuestionMultipleComponent,
    QuestionOpenEndedComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService
  ]
})
export class ChatModule { }
