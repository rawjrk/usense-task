import { Pipe, PipeTransform } from '@angular/core'

import Color from 'src/app/models/color'
import type { ColorType } from 'src/app/models/color'

function calculatePasswordStrength(password: string): number {
  if (!password.length) return -1
  if (password.length < 8) return 0

  // all non-Latin letters are counted as symbols !!!
  const hasLetters = password.match(/[a-zA-Z]/) !== null
  const hasDigits = password.match(/[0-9]/) !== null
  const hasSymbols = password.match(/[^a-zA-Z0-9]/) !== null

  let passwordStrength = [hasLetters, hasDigits, hasSymbols].reduce(
    (sum, value) => sum + Number(value),
    0
  )

  return passwordStrength
}

@Pipe({
  name: 'passwordStrength',
})
export class PasswordStrengthPipe implements PipeTransform {
  transform(indicators: ColorType[], password: string): ColorType[] {
    const strength = calculatePasswordStrength(password)

    switch (strength) {
      case 0:
        return [Color.R, Color.R, Color.R]
      case 1:
        return [Color.R, Color.E, Color.E]
      case 2:
        return [Color.Y, Color.Y, Color.E]
      case 3:
        return [Color.G, Color.G, Color.G]
      default:
        return [Color.E, Color.E, Color.E]
    }
  }
}
