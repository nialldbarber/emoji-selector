import {
  formatEmojisIntoArray,
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
  })
})
