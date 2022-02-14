import { useHamburger } from 'hooks/useHamburger'
import { classNames } from 'helpers'
import CloseMobileMenuButton from 'components/atoms/CloseMobileMenuButton/CloseMobileMenuButton'

export default function MobileMenu() {
  const { isOpen } = useHamburger()

  return (
    <div
      className={classNames(
        isOpen ? 'translate-x-0' : '-translate-x-80',
        'fixed top-0 left-0 z-40 h-full w-full max-w-xs overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out lg:hidden',
      )}
    >
      <div className="flex px-4 pt-5 pb-2">
        <CloseMobileMenuButton />
      </div>
      <div className="mt-2">
        <div className="border-b border-gray-200 px-4">
          Has not been implemented yet
        </div>
      </div>
    </div>
  )
}
