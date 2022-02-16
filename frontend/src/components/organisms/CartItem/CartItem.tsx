import { ICartItem } from 'types/cartItem'

interface IProps {
  cartItem: ICartItem
}

export default function CartItem({ cartItem }: IProps) {
  return (
    <li className="flex py-6 sm:py-10">
      CartItemImage
      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            CartItemImageTitle
            <p className="mt-1 text-sm font-medium text-gray-900">price</p>
          </div>

          <div className='className="mt-4 sm:pr-9" sm:mt-0'>
            SelectQuantity RemoveButton
          </div>
        </div>
        LeadTime
      </div>
    </li>
  )
}
