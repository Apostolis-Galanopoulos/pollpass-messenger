import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionOption } from '@app/core/models/question-options.model';

@Injectable()
export class FormService {

  form!: FormGroup;
  constructor (
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  addMultipleOption (options: QuestionOption[]) {
    const properties: { [x: string]: boolean; } = {};
    options.forEach((option: QuestionOption) => {
      properties[`${option.id}`] = false;
    });
    this.form = this.fb.group(properties);
  }
  inputForm (): FormGroup {
    return this.fb.group({
      input: new FormControl('', [Validators.required]),
    });
  }
}
