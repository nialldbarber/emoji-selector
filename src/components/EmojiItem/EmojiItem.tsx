import { useContext } from 'react'

import { ToastContext } from 'src/context'
import useCopyToClipboard from 'src/hooks/useCopyToClipboard'
import { formatEmojiLine } from 'src/libs/format-emojis'

type EmojiItemProps = {
  data: string
  index: any
  style: any
}

const EmojiItem = ({ data, index, style }: EmojiItemProps) => {
  const { updatedToast } = useContext(ToastContext)
  const [_, copy] = useCopyToClipboard()
  let { emoji, info } = formatEmojiLine(data[index])

  const copyToClipBoard = () => {
    copy(emoji)
    updatedToast && updatedToast(emoji)
  }

  return (
    <div style={style}>
      <div className="p-1 cursor-pointer">
        <p className="flex items-center" onClick={copyToClipBoard}>
          <span className="text-4xl">{emoji}</span>
          <span className="block pl-3">{info}</span>
        </p>
      </div>
    </div>
  )
}

export default EmojiItem
