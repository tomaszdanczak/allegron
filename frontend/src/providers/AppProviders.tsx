import { HamburgerProvider } from '../hooks/useHamburger'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'app/store'
import { Provider } from 'react-redux'
import { CurrencyProvider } from 'hooks/useCurrency'

type Props = {
  children: ReactNode
}

const AppProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HamburgerProvider>
          <CurrencyProvider>{children}</CurrencyProvider>
        </HamburgerProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders
