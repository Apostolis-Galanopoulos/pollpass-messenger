import { Kind } from '../enums/kind.enum';
import { QuestionType } from '../enums/question-type.enum';
import { Answers } from './answers.model';
import { QuestionOption } from './question-options.model';

export type Message = {
  id: string,
  created_at: string,
  kind: Kind,
  name_html: string,

  messages?: Message[],
  size?: number;

  display_type?: 'auto'
  question_id?: string,
  question_type?: QuestionType,
  question_options?: QuestionOption[],
  answers?: Answers[],
  redirect_url?: string
};
