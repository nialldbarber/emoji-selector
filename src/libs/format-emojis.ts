/**
 * takes a string literal (of emojis) and returns
 * an array split by new line
 */
export const formatEmojisIntoArray = (emojis: string): string[] => {
  let formattedEmojis = emojis.split('\n')
  return formattedEmojis
}

/**
 * takes an emoji array and a search
 * word and returns the updated array
 * based on the search word
 */
export const updatedEmojiListWithInput = (
  emojiList: string[],
  searchedWord: string
): string[] => {
  return emojiList.filter((emoji) => {
    return emoji.toLowerCase().includes(searchedWord.toLowerCase())
  })
}
