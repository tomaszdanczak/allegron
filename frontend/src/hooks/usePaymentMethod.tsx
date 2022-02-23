import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PaymentMethodContext = React.createContext({ paymentMethod: '', setPaymentMethod: (paymentMethod: string) => {} })

export const PaymentMethodProvider = ({ children }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState('')

  return <PaymentMethodContext.Provider value={{ paymentMethod, setPaymentMethod }}>{children}</PaymentMethodContext.Provider>
}

export const usePaymentMethod = () => {
  const payment = useContext(PaymentMethodContext)

  if (!payment) {
    throw Error('usePaymentMethod needs to be used inside PaymentMethodContext')
  }

  return payment
}
