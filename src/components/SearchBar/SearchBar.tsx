import { forwardRef } from 'react'

type SearchBarProps = {
  search: string
  searchFn: (e: any) => void
  removeFn: () => void
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ search, searchFn, removeFn }, ref) => {
    return (
      <div onClick={removeFn}>
        <input ref={ref} type="text" value={search} onChange={searchFn} />
      </div>
    )
  }
)

export default SearchBar
