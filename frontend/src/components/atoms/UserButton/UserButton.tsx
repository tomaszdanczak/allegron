import { UserIcon } from '@heroicons/react/outline'

export default function UserButton() {
  return (
    // TODO: Render this only when user is logged in
    <button className="ml-4 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Account</span>
      <UserIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
