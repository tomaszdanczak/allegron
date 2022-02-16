import { MenuIcon } from '@heroicons/react/outline'
import { useHamburger } from 'hooks/useHamburger'

export default function HamburgerButton() {
  const { openMobileMenu } = useHamburger()

  const openMobileMenuHandler = () => {
    openMobileMenu()
  }

  return (
    <button type="button" className="-ml-2 rounded-md bg-white p-2 text-gray-400" onClick={openMobileMenuHandler}>
      <span className="sr-only">Open menu</span>
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
