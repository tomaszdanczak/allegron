import { HamburgerProvider } from '../hooks/useHooks'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const AppProviders = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <HamburgerProvider>{children}</HamburgerProvider>
    </BrowserRouter>
  )
}

export default AppProviders
