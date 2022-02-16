import CartItem from 'components/organisms/CartItem/CartItem'
import OrderSummary from 'components/organisms/OrderSummary/OrderSummary'
import { useCart } from 'hooks/useCart'

export default function CartScreen() {
  const { cartItems } = useCart()
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem._id} cartItem={cartItem} />
            ))}
          </ul>
        </section>
        <OrderSummary />
      </form>
    </>
  )
}
