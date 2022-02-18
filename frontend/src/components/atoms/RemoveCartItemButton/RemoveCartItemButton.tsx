import { XIcon } from '@heroicons/react/solid'
import { useCart } from 'hooks/useCart'

interface IProps {
  _id: number
}

export default function RemoveCartItemButton({ _id }: IProps) {
  const { removeItemFromCart } = useCart()

  const removeCartItemHandler = (_id: number) => {
    removeItemFromCart(_id)
  }

  return (
    <div className="absolute top-0 right-0">
      <button onClick={() => removeCartItemHandler(_id)} type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Remove</span>
        <XIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
