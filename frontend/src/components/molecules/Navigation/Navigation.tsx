import Logo from 'components/atoms/Logo/Logo'
import SearchBox from 'components/atoms/SearchBox/SearchBox'
import ShoppingCartButton from 'components/atoms/ShoppingCartButton/ShoppingCartButton'
import DesktopMenu from 'components/molecules/DesktopMenu/DesktopMenu'

export default function Navigation() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="items-cente flex h-16 justify-between">
          {/* ====================== Logo (lg+) ====================== */}
          <div className="hidden lg:flex lg:items-center">
            <Logo />
          </div>

          {/* ====================== Desktop Menu (lg+) ====================== */}
          <div className="hidden h-full lg:flex lg:items-center">
            <DesktopMenu />
          </div>

          {/* ====================== Hamburger and Search (lg-) ====================== */}
          <div className="flex flex-1 items-center lg:hidden">
            <SearchBox />
          </div>

          {/* ====================== Logo (lg-) ====================== */}
          <div className="flex items-center lg:hidden">
            <Logo />
          </div>

          {/* ====================== Rest (lg+ and lg-) ====================== */}
          <div className="flex flex-1 items-center justify-end">
            <SearchBox onlyLg />
            <span
              className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
              aria-hidden="true"
            />
            <ShoppingCartButton />
          </div>
        </div>
      </div>
    </div>
  )
}
