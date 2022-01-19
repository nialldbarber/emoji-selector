import { useMemo, useState } from 'react'

import { FixedSizeList as List } from 'react-window'
import { EmojiItem } from 'src/components/EmojiItem'
import { emojis as emojiList } from 'src/constants/emojis'
import {
  formatEmojisIntoArray,
  updatedEmojiListWithInput,
} from 'src/libs/format-emojis'

type EmojiListProps = {
  search: string
}

const EmojiList = ({ search }: EmojiListProps) => {
  const [emojis] = useState(() => formatEmojisIntoArray(emojiList))

  const updatedEmojiList = useMemo(() => {
    return updatedEmojiListWithInput(emojis, search)
  }, [search])

  return (
    <div>
      <List
        height={350}
        itemCount={updatedEmojiList.length}
        itemSize={50}
        width={1000}
        itemData={updatedEmojiList}
      >
        {EmojiItem}
      </List>
    </div>
  )
}

export default EmojiList
