type EmojiItemProps = {
  data: string
  index: any
  style: any
}

const EmojiItem = ({ data, index, style }: EmojiItemProps) => {
  return (
    <div style={style}>
      <div style={{ padding: '1rem' }}>
        <p>{data[index]}</p>
      </div>
    </div>
  )
}

export default EmojiItem
