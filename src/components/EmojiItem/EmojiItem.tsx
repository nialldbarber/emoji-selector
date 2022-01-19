import { getFirstItemOfString } from 'src/libs/format-emojis'

type EmojiItemProps = {
  data: string
  index: any
  style: any
}

const EmojiItem = ({ data, index, style }: EmojiItemProps) => {
  const emoji = getFirstItemOfString(data[index])
  return (
    <div style={style}>
      <div style={{ padding: '1rem' }}>
        <p onClick={() => console.log(emoji)}>{data[index]}</p>
      </div>
    </div>
  )
}

export default EmojiItem
