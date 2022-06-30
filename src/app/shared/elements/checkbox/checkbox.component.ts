import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'pm-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() formControlNameValue!: string;
  @Input() label: string = '';
  control!: AbstractControl;
  constructor (
    private readonly controlContainer: ControlContainer
  ) { }
  writeValue (): void {
  }
  registerOnChange (): void {

  }
  registerOnTouched (): void {

  }

  get formControl (): FormControl {
    return  this.control = this.controlContainer.control!!.get(this.formControlNameValue) as FormControl;
 }
}
