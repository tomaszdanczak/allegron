import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const HamburgerContext = React.createContext({
  isOpen: false,
  openMobileMenu: () => {},
  closeMobileMenu: () => {},
})

export const HamburgerProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMobileMenu = () => {
    setIsOpen(true)
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  return <HamburgerContext.Provider value={{ isOpen, openMobileMenu, closeMobileMenu }}>{children}</HamburgerContext.Provider>
}

export const useHamburger = () => {
  const hamburger = useContext(HamburgerContext)

  if (!hamburger) {
    throw Error('useHamburger needs to be used inside HamburgerContext')
  }

  return hamburger
}
