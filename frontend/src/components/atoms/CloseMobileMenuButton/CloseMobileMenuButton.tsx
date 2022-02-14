import { XIcon } from '@heroicons/react/outline'
import { useHamburger } from 'hooks/useHamburger'

export default function CloseMobileMenuButton() {
  const { closeMobileMenu } = useHamburger()

  const closeMobileMenuHandler = () => {
    closeMobileMenu()
  }

  return (
    <button
      type="button"
      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
      onClick={closeMobileMenuHandler}
    >
      <span className="sr-only">Close menu</span>
      <XIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
