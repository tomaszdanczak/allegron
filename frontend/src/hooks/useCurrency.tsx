import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const CurrencyContext = React.createContext({
  currency: 'USD',
  setCurrency: (value: string) => {},
})

export const CurrencyProvider = ({ children }: Props) => {
  const [currency, setCurrency] = useState('USD')

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export const useCurrency = () => {
  const currency = useContext(CurrencyContext)

  if (!currency) {
    throw Error('useCurrency needs to be used inside CurrencyContext')
  }

  return currency
}
