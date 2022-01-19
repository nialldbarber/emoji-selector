import { formatEmojisIntoArray } from 'src/libs/format-emojis'
import { input, output } from 'test/__mocks__/dummy-data'

describe('libs -> format-emojis', () => {
  describe('formatEmojisIntoArray', () => {
    test('it should turn a template literal into an array', () => {
      expect(formatEmojisIntoArray(input)).toStrictEqual(output)
    })
  })
})
