import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'
import { ICartItem } from 'types/cartItem'

type Props = {
  children: ReactNode
}

const CartContext = React.createContext({
  cartItems: [] as ICartItem[],
  addToCart: (newCartItem: ICartItem) => {},
  removeFromCart: (_id: number) => {},
})

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState([] as ICartItem[])

  const addToCart = (newCartItem: ICartItem) => {
    const existedCartItem = cartItems.find((cartItem) => cartItem._id === newCartItem._id)
    const cartItemsWithoutExistedCartItem = cartItems.filter((cartItem) => cartItem._id !== newCartItem._id)

    if (existedCartItem) {
      if (existedCartItem.quantity + newCartItem.quantity > newCartItem.countInStock) {
        newCartItem.quantity = newCartItem.countInStock
        setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
      } else {
        newCartItem.quantity = newCartItem.quantity + existedCartItem.quantity
        setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
      }
    } else {
      setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
    }
  }

  const removeFromCart = (_id: number) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem._id !== _id)

    setCartItems(newCartItems)
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const cart = useContext(CartContext)

  if (!cart) {
    throw Error('useCart needs to be used inside CartContext')
  }

  return cart
}
