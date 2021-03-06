import CartItemImage from 'components/atoms/CartItemImage/CartItemImage'
import CartItemTitle from 'components/atoms/CartItemTitle/CartItemTitle'
import LeadTime from 'components/atoms/LeadTime/LeadTime'
import RemoveCartItemButton from 'components/atoms/RemoveCartItemButton/RemoveCartItemButton'
import SelectQuantity from 'components/molecules/SelectQuantity/SelectQuantity'
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
      <CartItemImage image={cartItem.image} _id={cartItem._id} />
      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <CartItemTitle name={cartItem.name} _id={cartItem._id} />
            <p className="mt-1 text-sm font-medium text-gray-900">{`${displaySelectedCurrency(priceInfo.currency)}${priceInfo.price}`}</p>
          </div>

          <div className='sm:pr-9" mt-4 sm:mt-0'>
            <SelectQuantity _id={cartItem._id} quantity={cartItem.quantity} countInStock={cartItem.countInStock} name={cartItem.name} />
            <RemoveCartItemButton _id={cartItem._id} />
          </div>
        </div>
        <LeadTime deliveryInfo={cartItem.deliveryInfo} />
      </div>
    </li>
  )
}
