import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() name!: string;
  @Input() color: string = 'primary';
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  click () {
    this.clicked.emit();
  }
}
