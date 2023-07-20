import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { PasswordFormComponent } from './components/password-form/password-form.component'
// import { PasswordFormQuestionComponent } from './components/password-form/password-form-question.component'

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    PasswordFormComponent,
    // PasswordFormQuestionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
