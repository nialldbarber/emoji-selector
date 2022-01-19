import { useEffect, useRef, useState } from 'react'

import { EmojiList } from 'src/components/EmojiList'
import { SearchBar } from 'src/components/SearchBar'

const App = () => {
  const [search, setSearch] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchRef?.current!.focus()
  }, [])

  return (
    <main>
      <SearchBar
        ref={searchRef}
        search={search}
        searchFn={(e) => setSearch(e.target.value)}
        removeFn={() => setSearch('')}
      />
      <EmojiList search={search} />
    </main>
  )
}

export default App
