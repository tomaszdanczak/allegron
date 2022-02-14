import { HamburgerProvider } from '../hooks/useHooks'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'app/store'
import { Provider } from 'react-redux'

type Props = {
  children: ReactNode
}

const AppProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HamburgerProvider>{children}</HamburgerProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders
