import { HamburgerProvider } from '../hooks/useHamburger'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'app/store'
import { Provider } from 'react-redux'
import { CurrencyProvider } from 'hooks/useCurrency'
import { CartProvider } from 'hooks/useCart'
import { ShippingInfoProvider } from 'hooks/useShippingInfo'

type Props = {
  children: ReactNode
}

const AppProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HamburgerProvider>
          <CurrencyProvider>
            <ShippingInfoProvider>
              <CartProvider>{children}</CartProvider>
            </ShippingInfoProvider>
          </CurrencyProvider>
        </HamburgerProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProviders
