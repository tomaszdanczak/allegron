import { displaySelectedCurrency } from 'helpers'
import { useCart } from 'hooks/useCart'
import { useCurrency } from 'hooks/useCurrency'
import { Link } from 'react-router-dom'

export default function OrderedProducts() {
  const { cartItems } = useCart()
  const { currency } = useCurrency()

  console.log('cartItems:', cartItems)

  return (
    <div>
      {cartItems.map(({ _id, image, name, quantity, prices, description }) => {
        const priceInfo = prices.find((price) => price.currency === currency) || prices[0]

        return (
          <div key={_id} className="mt-2 flex space-x-6 border-b border-gray-200 py-10">
            <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <Link to={`/products/${_id}`}>{name}</Link>
                </h4>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-900">Quantity</dt>
                    <dd className="ml-2 text-gray-700">{quantity}</dd>
                  </div>
                  <div className="flex pl-4 sm:pl-6">
                    <dt className="font-medium text-gray-900">Price</dt>
                    <dd className="ml-2 text-gray-700">{`${displaySelectedCurrency(priceInfo.currency)}${priceInfo.price}`}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
