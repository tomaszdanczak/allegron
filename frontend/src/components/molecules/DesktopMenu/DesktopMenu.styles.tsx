import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeclassname = 'active'

export const StyledNavLink = styled(NavLink).attrs({ activeclassname })`
  cursor: pointer;
  border-color: transparent;
  color: #374151;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #1f2937;
  }

  &.${activeclassname} {
    color: #4f46e5;
    border-color: #4f46e5;
  }
`
