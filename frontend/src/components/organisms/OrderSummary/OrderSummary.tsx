import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

import Button from 'components/atoms/Button/Button'
import { displaySelectedCurrency } from 'helpers'
import { useCart } from 'hooks/useCart'
import { useCurrency } from 'hooks/useCurrency'
import { IPrice } from 'types/product'

export default function OrderSummary() {
  const { cartItems } = useCart()
  const { currency } = useCurrency()

  const getPriceInSelectedCurrency = (prices: IPrice[]): number => {
    const priceInfo = prices.find((price) => price.currency === currency) || prices[0]

    return priceInfo.price
  }

  const subtotalPrice = cartItems.reduce((a, c) => a + c.quantity * getPriceInSelectedCurrency(c.prices), 0)

  const taxPrice = cartItems.length > 0 ? subtotalPrice * 0.23 : 0

  const roundedTaxPrice = Math.round(taxPrice * 100) / 100

  const shippingPrice = cartItems.length === 0 ? 0 : subtotalPrice > 100 ? 0 : 5

  const totalPrice = subtotalPrice + shippingPrice + roundedTaxPrice

  const handleCheckoutButtonClick = () => {}

  return (
    <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">{`${displaySelectedCurrency(currency)}${subtotalPrice}`}</dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <button className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how shipping is calculated</span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            {shippingPrice === 0 && cartItems.length > 0 ? (
              <span className="text-green-500">Free delivery</span>
            ) : (
              `${displaySelectedCurrency(currency)}${shippingPrice}`
            )}
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <button className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Learn more about how tax is calculated</span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </dt>
          <dd className="text-sm font-medium text-gray-900">{`${displaySelectedCurrency(currency)}${roundedTaxPrice}`}</dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">{`${displaySelectedCurrency(currency)}${totalPrice}`}</dd>
        </div>
      </dl>

      <Button disabled={cartItems.length === 0 && true} text="Checkout" onClick={handleCheckoutButtonClick} />
    </section>
  )
}
