import { SearchIcon } from '@heroicons/react/outline'
import { classNames } from 'helpers'

interface SearchBoxProps {
  onlyLg?: boolean
}

export default function SearchBox({ onlyLg }: SearchBoxProps) {
  return (
    <button className={classNames(onlyLg ? 'hidden lg:flex' : 'flex', 'ml-2 p-2 text-gray-400 hover:text-gray-500')}>
      <span className="sr-only">Search</span>
      <SearchIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
