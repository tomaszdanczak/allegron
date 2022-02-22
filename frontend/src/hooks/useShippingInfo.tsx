import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'
import { IShippingInfo } from 'types/shippingInfo'

type Props = {
  children: ReactNode
}

let shippingInfoFromLocalStorage = {} as IShippingInfo

try {
  shippingInfoFromLocalStorage = localStorage.getItem('shippingInfo')
    ? JSON.parse(localStorage.getItem('shippingInfo') as string)
    : ({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalcode: '',
        phone: '',
      } as IShippingInfo)
} catch {}

const ShippingInfoContext = React.createContext({ shippingInfo: {} as IShippingInfo, setShippingInfo: (shippingInfo: IShippingInfo) => {} })

export const ShippingInfoProvider = ({ children }: Props) => {
  const [shippingInfo, setShippingInfo] = useState(shippingInfoFromLocalStorage)

  return <ShippingInfoContext.Provider value={{ shippingInfo, setShippingInfo }}>{children}</ShippingInfoContext.Provider>
}

export const useShippingInfo = () => {
  const shippingInfo = useContext(ShippingInfoContext)

  if (!shippingInfo) {
    throw Error('useShippingInfo needs to be used inside ShippingInfoContext')
  }

  return shippingInfo
}
