import { useEffect, useRef, useState } from 'react'

import { EmojiList } from 'src/components/EmojiList'
import { SearchBar } from 'src/components/SearchBar'
import { H } from 'src/components/Typography'

const App = () => {
  const [search, setSearch] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchRef?.current!.focus()
  }, [])

  const handleRemove = () => searchRef?.current!.focus()

  return (
    <main>
      <H text="Emoji Selector" className="flex justify-center mt-5 text-4xl" />
      <SearchBar
        ref={searchRef}
        search={search}
        searchFn={(e) => setSearch(e.target.value)}
        removeFn={() => setSearch('')}
        handleRemove={handleRemove}
      />
      <EmojiList search={search} />
    </main>
  )
}

export default App
