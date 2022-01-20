import {
  formatEmojisIntoArray,
  getFirstItemOfString,
  updatedEmojiListWithInput,
} from 'src/libs/format-emojis'
import { input, output } from 'test/__mocks__/dummy-data'

describe('libs -> format-emojis', () => {
  describe('formatEmojisIntoArray()', () => {
    test('it should turn a template literal into an array', () => {
      expect(formatEmojisIntoArray(input)).toStrictEqual(output)
    })

    test('it should return an array with a single empty string if nothing is provided', () => {
      expect(formatEmojisIntoArray('')).toStrictEqual([''])
    })

    test('it should turn a non-string value into a string and return it', () => {
      // this will throw a ts-error anyway, but just in case!
      // @ts-ignore
      expect(formatEmojisIntoArray(12345)).toStrictEqual(['12345'])
    })
  })

  describe('updatedEmojiListWithInput()', () => {
    test('it should return a new array with the searched input', () => {
      let newOutput = [
        '😃:smiley, face, happy, joy, haha, :D, :), smile, funny',
      ]
      expect(updatedEmojiListWithInput(output, 'smiley')).toStrictEqual(
        newOutput
      )
    })

    test('it should return full, original array if no search term is provided', () => {
      expect(updatedEmojiListWithInput(output, '')).toStrictEqual(output)
    })

    test("it should return any empty array if search term doesn't match", () => {
      expect(
        updatedEmojiListWithInput(output, 'existential-dread')
      ).toStrictEqual([])
    })
  })

  describe('getFirstItemOfString()', () => {
    test('it should return the first item of a string', () => {
      expect(getFirstItemOfString('this is a string')).toBe('t')
    })

    test('it should return the first emoji of a string and not return an unrecognised icon', () => {
      expect(getFirstItemOfString('😬:grimacing, face, grimace, teeth')).toBe(
        '😬'
      )
    })
  })
})
