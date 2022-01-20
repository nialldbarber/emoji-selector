import { useMemo, useRef, useState } from 'react'

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
  const listRef = useRef<null | List>(null)
  const [emojis] = useState(() => formatEmojisIntoArray(emojiList))

  const updatedEmojiList = useMemo(() => {
    return updatedEmojiListWithInput(emojis, search)
  }, [search])

  const scrollToTop = () => listRef?.current!.scrollToItem(0)
  const scrollToBottom = () =>
    listRef?.current!.scrollToItem(updatedEmojiList.length)

  return (
    <div className="flex items-center justify-center">
      <List
        height={height - 165}
        itemCount={updatedEmojiList.length}
        itemSize={70}
        width={width - 100}
        // @ts-ignore
        itemData={updatedEmojiList}
        ref={listRef}
      >
        {EmojiItem}
      </List>
      <button onClick={scrollToTop}>Go to top</button>
      <button onClick={scrollToBottom}>Go to bottom</button>
    </div>
  )
}

export default EmojiList
