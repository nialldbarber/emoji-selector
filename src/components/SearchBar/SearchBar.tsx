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
      <div className="flex justify-center flex-col items-center mt-10 mb-5">
        <div className="relative flex justify-center items-center w-96">
          {search.length > 0 ? (
            <CrossIcon
              className="absolute right-3 cursor-pointer"
              onClick={() => {
                removeFn()
                handleRemove()
              }}
            />
          ) : null}
          <div className="flex flex-col items-center">
            <input
              className="bg-gray-200 w-96 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              ref={ref}
              type="text"
              value={search}
              onChange={searchFn}
              placeholder="Start typing..."
            />
          </div>
        </div>
        <p className="mt-2">Click a row to copy to emoji!</p>
      </div>
    )
  }
)

export default SearchBar
