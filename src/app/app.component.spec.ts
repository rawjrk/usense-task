import { TestBed } from '@angular/core/testing'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { PasswordFormComponent } from './components/password-form/password-form.component'
import { IndicatorFieldComponent } from './components/indicator-field/indicator-field.component'
import { PasswordStrengthPipe } from './pipes/password-strength/password-strength.pipe'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule],
      declarations: [
        AppComponent,
        PasswordFormComponent,
        IndicatorFieldComponent,
        PasswordStrengthPipe,
      ],
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'USENSE Test Task'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('USENSE Test Task')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('header')?.textContent).toContain(
      'USENSE Test Task'
    )
  })
})
