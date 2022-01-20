import useCopyToClipboard from 'src/hooks/useCopyToClipboard'
import { getFirstItemOfString } from 'src/libs/format-emojis'

type EmojiItemProps = {
  data: string
  index: any
  style: any
}

const EmojiItem = ({ data, index, style }: EmojiItemProps) => {
  const [value, copy] = useCopyToClipboard()
  const emoji = getFirstItemOfString(data[index])

  return (
    <div style={style}>
      <div style={{ padding: '1rem' }}>
        <p onClick={() => copy(emoji)}>{data[index]}</p>
      </div>
    </div>
  )
}

export default EmojiItem
