import { MenuIcon } from '@heroicons/react/outline'

export default function HamburgerButton() {
  return (
    <button
      type="button"
      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
    >
      <span className="sr-only">Open menu</span>
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
