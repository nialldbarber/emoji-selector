import { useMemo, useState } from 'react'

import { FixedSizeList as List } from 'react-window'
import { EmojiItem } from 'src/components/EmojiItem'
import { emojis as emojiList } from 'src/constants/emojis'
import useWindowSize from 'src/hooks/useWindowSize'
import {
  formatEmojisIntoArray,
  updatedEmojiListWithInput,
} from 'src/libs/format-emojis'

type EmojiListProps = {
  search: string
}

const EmojiList = ({ search }: EmojiListProps) => {
  const { width, height } = useWindowSize()
  const [emojis] = useState(() => formatEmojisIntoArray(emojiList))

  const updatedEmojiList = useMemo(() => {
    return updatedEmojiListWithInput(emojis, search)
  }, [search])

  return (
    <div className="flex items-center justify-center">
      <List
        height={height - 165}
        itemCount={updatedEmojiList.length}
        itemSize={50}
        width={width - 100}
        // @ts-ignore
        itemData={updatedEmojiList}
      >
        {EmojiItem}
      </List>
    </div>
  )
}

export default EmojiList
