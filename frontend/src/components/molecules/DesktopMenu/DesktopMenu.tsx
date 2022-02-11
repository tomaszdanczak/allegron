import { StyledNavLink } from './DesktopMenu.styles'
import { capitalizeFirstLetter } from 'helpers'

const categories = [
  { id: 1, category: 'women' },
  { id: 2, category: 'men' },
]

export default function DesktopMenu() {
  return (
    <div className="ml-12 h-full">
      <div className="flex h-full justify-center space-x-8">
        {categories.map(({ category, id }) => (
          <StyledNavLink
            to={`/${category}`}
            key={id}
            className="text-md relative z-10 -mb-px flex items-center border-b-2 pt-px font-medium transition-colors duration-200 ease-out"
          >
            {capitalizeFirstLetter(category)}
          </StyledNavLink>
        ))}
      </div>
    </div>
  )
}
