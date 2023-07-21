import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { PasswordFormComponent } from './components/password-form/password-form.component'
import { IndicatorFieldComponent } from './components/indicator-field/indicator-field.component'
import { PasswordStrengthPipe } from './pipes/password-strength/password-strength.pipe'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PasswordFormComponent,
    IndicatorFieldComponent,
    PasswordStrengthPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
