// from: https://usehooks-ts.com/react-hook/use-copy-to-clipboard
import { useState } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // return success

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (err) {
      console.warn('Copy failed', err)
      setCopiedText(null)
      return false
    }
  }
  return [copiedText, copy]
}

export default useCopyToClipboard
