import { PasswordStrengthPipe } from './password-strength.pipe'
import Color from 'src/app/models/color'

describe('PasswordStrengthPipe', () => {
  const pipe = new PasswordStrengthPipe()
  const indicatorsInit = [Color.E, Color.E, Color.E]

  it('empty #password returns #indicators EEE (all grey)', () => {
    const password = ''
    expect(pipe.transform(indicatorsInit, password)).toEqual([
      Color.E,
      Color.E,
      Color.E,
    ])
  })

  it('#password.length < 8 should returns #indicators RRR (all red)', () => {
    const password = 'short'
    expect(pipe.transform(indicatorsInit, password)).toEqual([
      Color.R,
      Color.R,
      Color.R,
    ])
  })

  it('weak #password should return #indicators REE (one red)', () => {
    const password1 = 'abcdefgh'
    const password2 = '12345678'
    const password3 = '&^$@.#!%'

    const expectedOutput = [Color.R, Color.E, Color.E]

    expect(pipe.transform(indicatorsInit, password1)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password2)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password3)).toEqual(expectedOutput)
  })

  it('medium #password should return #indicators YYE (two yellow)', () => {
    const password1 = 'abcd5678'
    const password2 = 'abcd.#!%'
    const password3 = '1234efgh'
    const password4 = '1234.#!%'
    const password5 = '&^$@5678'
    const password6 = '&^$@efgh'

    const expectedOutput = [Color.Y, Color.Y, Color.E]

    expect(pipe.transform(indicatorsInit, password1)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password2)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password3)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password4)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password5)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password6)).toEqual(expectedOutput)
  })

  it('strong #password should return #indicators GGG (all green)', () => {
    const password1 = 'abc456!%'
    const password2 = '123@.#gh'
    const password3 = '&^$@ef78'

    const expectedOutput = [Color.G, Color.G, Color.G]

    expect(pipe.transform(indicatorsInit, password1)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password2)).toEqual(expectedOutput)
    expect(pipe.transform(indicatorsInit, password3)).toEqual(expectedOutput)
  })
})
