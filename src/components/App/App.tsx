import { useContext, useEffect, useRef, useState } from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { EmojiList } from 'src/components/EmojiList'
import { SearchBar } from 'src/components/SearchBar'
import { H } from 'src/components/Typography'
import { ToastContext } from 'src/context'

const App = () => {
  const { emoji } = useContext(ToastContext)
  const [search, setSearch] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const notInitialRender = useRef(false)

  // on first render, focus on the search input
  useEffect(() => {
    searchRef?.current!.focus()
  }, [])

  // once we've removed the search input,
  // we want to re-focus on the input
  const handleRemove = () => searchRef?.current!.focus()

  // the ref deals with ignoring the very
  // first render.
  // this then picks up if an emoji has
  // been copied to clipboard. once copied
  // it triggers a toast notification
  useEffect(() => {
    if (notInitialRender.current) {
      toast(`${emoji} Copied to clipboard! 🎉`, {
        duration: 2000,
      })
    } else {
      notInitialRender.current = true
    }
  }, [emoji])

  return (
    <>
      <Toaster
        toastOptions={{
          className: 'shadow-sm border-purple-500',
        }}
      />
      <main>
        <H
          text="Emoji Selector"
          className="flex justify-center mt-5 text-4xl"
        />
        <SearchBar
          ref={searchRef}
          search={search}
          searchFn={(e) => setSearch(e.target.value)}
          removeFn={() => setSearch('')}
          handleRemove={handleRemove}
        />
        <EmojiList search={search} />
      </main>
    </>
  )
}

export default App
