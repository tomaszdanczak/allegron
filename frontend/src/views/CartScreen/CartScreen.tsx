import { useCart } from 'hooks/useCart'

export default function CartScreen() {
  const { cartItems } = useCart()
  return (
    <div>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  )
}
