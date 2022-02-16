import CartItemImage from 'components/atoms/CartItemImage/CartItemImage'
import CartItemTitle from 'components/atoms/CartItemTitle/CartItemTitle'
import { displaySelectedCurrency } from 'helpers'
import { useCurrency } from 'hooks/useCurrency'
import { ICartItem } from 'types/cartItem'

interface IProps {
  cartItem: ICartItem
}

export default function CartItem({ cartItem }: IProps) {
  const { prices } = cartItem
  const { currency } = useCurrency()

  const priceInfo = prices.find((price) => price.currency === currency) || prices[0]

  return (
    <li className="flex py-6 sm:py-10">
      <CartItemImage image={cartItem.image} />
      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <CartItemTitle name={cartItem.name} _id={cartItem._id} />
            <p className="mt-1 text-sm font-medium text-gray-900">{`${displaySelectedCurrency(priceInfo.currency)}${priceInfo.price}`}</p>
          </div>

          <div className='className="mt-4 sm:pr-9" sm:mt-0'>SelectQuantity RemoveButton</div>
        </div>
        LeadTime
      </div>
    </li>
  )
}
