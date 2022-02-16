import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'
import { ICartItem } from 'types/cartItem'

type Props = {
  children: ReactNode
}

let cartItemsFromLocalStorage = [] as ICartItem[]
try {
  cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : ([] as ICartItem[])
} catch {}

const CartContext = React.createContext({
  cartItems: [] as ICartItem[],
  addToCart: (newCartItem: ICartItem) => {},
  removeFromCart: (_id: number) => {},
  updateCartItem: (_id: number, quantity: number) => {},
})

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage)

  const addToCart = (newCartItem: ICartItem) => {
    const existedCartItem = cartItems.find((cartItem) => cartItem._id === newCartItem._id)
    const cartItemsWithoutExistedCartItem = cartItems.filter((cartItem) => cartItem._id !== newCartItem._id)

    if (existedCartItem) {
      if (existedCartItem.quantity + newCartItem.quantity > newCartItem.countInStock) {
        newCartItem.quantity = newCartItem.countInStock
        setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
        localStorage.setItem('cartItems', JSON.stringify([newCartItem, ...cartItemsWithoutExistedCartItem]))
      } else {
        newCartItem.quantity = newCartItem.quantity + existedCartItem.quantity
        setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
        localStorage.setItem('cartItems', JSON.stringify([newCartItem, ...cartItemsWithoutExistedCartItem]))
      }
    } else {
      setCartItems([newCartItem, ...cartItemsWithoutExistedCartItem])
      localStorage.setItem('cartItems', JSON.stringify([newCartItem, ...cartItemsWithoutExistedCartItem]))
    }
  }

  const removeFromCart = (_id: number) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem._id !== _id)

    setCartItems(newCartItems)
    localStorage.setItem('cartItems', JSON.stringify(newCartItems))
  }

  const updateCartItem = (_id: number, quantity: number) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem._id === _id) {
        const newCartItem = { ...cartItem, quantity }
        return newCartItem
      }
      return cartItem
    })

    setCartItems(newCartItems)
    localStorage.setItem('cartItems', JSON.stringify(newCartItems))
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const cart = useContext(CartContext)

  if (!cart) {
    throw Error('useCart needs to be used inside CartContext')
  }

  return cart
}
