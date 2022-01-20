import { forwardRef } from 'react'

import CrossIcon from 'src/components/Icons/Cross'

type SearchBarProps = {
  search: string
  searchFn: (e: any) => void
  removeFn: () => void
  handleRemove: () => void
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ search, searchFn, removeFn, handleRemove }, ref) => {
    return (
      <div className="flex justify-center mt-10 mb-5">
        <div className="relative flex justify-center items-center w-96">
          {search.length > 0 ? (
            <CrossIcon
              className="absolute right-2 cursor-pointer"
              onClick={() => {
                removeFn()
                handleRemove()
              }}
            />
          ) : null}
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            ref={ref}
            type="text"
            value={search}
            onChange={searchFn}
            placeholder="Start typing..."
          />
        </div>
      </div>
    )
  }
)

export default SearchBar
