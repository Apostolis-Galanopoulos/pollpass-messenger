import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MessageAnchorDirective } from './directives/message-anchor.directive';
import { ButtonComponent } from './elements/button/button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { InputComponent } from './elements/input/input.component';
import { RadioGroupComponent } from './elements/radio-group/radio-group.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  declarations: [
    SafeHtmlPipe,
    MessageAnchorDirective,
    RadioGroupComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    SafeHtmlPipe,
    MessageAnchorDirective,
    RadioGroupComponent,
    ButtonComponent,
    CheckboxComponent,
    InputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { color: 'primary' } as MatCheckboxDefaultOptions}
  ]
})
export class SharedModule { }
