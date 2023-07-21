import { Component } from '@angular/core'

import Color from 'src/app/models/color'

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  password = ''
  showPassword = false
  indicators = [Color.E, Color.E, Color.E]
}
