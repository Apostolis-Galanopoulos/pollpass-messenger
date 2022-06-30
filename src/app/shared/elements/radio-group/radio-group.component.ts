import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioGroup } from './radio-group.model';

@Component({
  selector: 'pm-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponent {
  @Input() options!: RadioGroup[];
  @Output() optionsChanged: EventEmitter<RadioGroup> = new EventEmitter();

  click (option: RadioGroup): void {
    this.optionsChanged.emit(option);
  }
}
