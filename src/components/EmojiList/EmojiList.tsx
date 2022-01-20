import { useMemo, useRef, useState } from 'react'

import { FixedSizeList as List } from 'react-window'
import { EmojiItem } from 'src/components/EmojiItem'
import DownIcon from 'src/components/Icons/Down'
import UpIcon from 'src/components/Icons/Up'
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
        height={height - 200}
        width={width - 100}
        itemCount={updatedEmojiList.length}
        itemSize={70}
        // @ts-ignore
        itemData={updatedEmojiList}
        ref={listRef}
      >
        {EmojiItem}
      </List>
      <div className="fixed top-20 right-5 cursor-pointer">
        <UpIcon onClick={scrollToTop} />
      </div>
      <div className="fixed bottom-20 right-5 cursor-pointer">
        <DownIcon onClick={scrollToBottom} />
      </div>
    </div>
  )
}

export default EmojiList
