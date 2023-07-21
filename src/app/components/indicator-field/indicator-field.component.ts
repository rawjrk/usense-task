import { Component, Input } from '@angular/core'

@Component({
  selector: 'indicator-field',
  templateUrl: './indicator-field.component.html',
  styleUrls: ['./indicator-field.component.scss'],
})
export class IndicatorFieldComponent {
  @Input() color = 'grey'
}
