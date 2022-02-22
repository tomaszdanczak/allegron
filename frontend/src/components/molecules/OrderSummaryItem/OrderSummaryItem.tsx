import { TrashIcon } from '@heroicons/react/solid'
import { displaySelectedCurrency } from 'helpers'
import { useCurrency } from 'hooks/useCurrency'
import { Link } from 'react-router-dom'
import { ICartItem } from 'types/cartItem'
import SelectQuantity from 'components/molecules/SelectQuantity/SelectQuantity'
import { useCart } from 'hooks/useCart'
interface IProps {
  cartItem: ICartItem
}

export default function OrderSummaryItem({ cartItem }: IProps) {
  const { prices, image } = cartItem
  const { currency } = useCurrency()
  const { removeItemFromCart } = useCart()

  const priceInfo = prices.find((price) => price.currency === currency) || prices[0]

  const deleteItemHandler = (_id: number) => {
    removeItemFromCart(_id)
  }

  return (
    <li key={cartItem._id} className="flex py-6 px-4 sm:px-6">
      <div className="flex-shrink-0">
        <Link to={`/products/${cartItem._id}`}>
          <img src={image.imageSrc} alt={image.imageAlt} className="w-20 rounded-md" />
        </Link>
      </div>

      <div className="ml-6 flex flex-1 flex-col">
        <div className="flex">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm">
              <Link to={`/products/${cartItem._id}`} className="font-medium text-gray-700 hover:text-gray-800">
                {cartItem.name}
              </Link>
            </h4>
          </div>

          <div className="ml-4 flow-root flex-shrink-0">
            <button
              onClick={() => deleteItemHandler(cartItem._id)}
              type="button"
              className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Remove</span>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between pt-2">
          <p className="mt-1 text-sm font-medium text-gray-900">{`${displaySelectedCurrency(priceInfo.currency)}${priceInfo.price}`}</p>

          <div className="ml-4">
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <SelectQuantity _id={cartItem._id} quantity={cartItem.quantity} countInStock={cartItem.countInStock} name={cartItem.name} />
          </div>
        </div>
      </div>
    </li>
  )
}
