import Button from 'components/atoms/Button/Button'
import { useCart } from 'hooks/useCart'
import { usePrices } from 'hooks/usePrices'
import { useShippingInfo } from 'hooks/useShippingInfo'

export default function OrderInformation() {
  const { totalPrice, shippingPrice, roundedTaxPrice, subtotalPrice, currentCurrency } = usePrices()
  const { cartItems } = useCart()
  const { shippingInfo } = useShippingInfo()
  const { firstName, lastName, address, city, country } = shippingInfo
  console.log('shippingInfo:', shippingInfo)

  return (
    <div className="mt-24">
      <h2 className="sr-only">Billing Summary</h2>

      <div className="rounded-lg bg-gray-50 py-6 px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 lg:py-8">
        <dl className="text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-5 lg:pl-8">
          <div className="w-full ">
            <dt className="w-full font-medium text-gray-900">Billing address</dt>
            <dd className="mt-3 w-full text-gray-500">
              <span className="block">{`${firstName} ${lastName}`}</span>
              <span className="block">{address}</span>
              <span className="block">{`${city}, ${country}`}</span>
            </dd>
          </div>
        </dl>

        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-7 lg:mt-0 lg:pr-8">
          <div className="flex items-center justify-between pb-4">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium text-gray-900">{`${currentCurrency}${subtotalPrice}`}</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="font-medium text-gray-900">
              {shippingPrice === 0 && cartItems.length > 0 ? (
                <span className="text-green-500">Free delivery</span>
              ) : (
                `${currentCurrency}${roundedTaxPrice}`
              )}
            </dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Tax</dt>
            <dd className="font-medium text-gray-900">{`${currentCurrency}${roundedTaxPrice}`}</dd>
          </div>
          <div className="flex items-center justify-between pt-4">
            <dt className="font-medium text-gray-900">Order total</dt>
            <dd className="font-medium text-indigo-600">{`${currentCurrency}${totalPrice}`}</dd>
          </div>
          <div className="mt-8">
            <Button variant="big" text="Order" />
          </div>
        </dl>
      </div>
    </div>
  )
}
