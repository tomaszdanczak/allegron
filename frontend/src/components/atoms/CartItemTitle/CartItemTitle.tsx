import { Link } from 'react-router-dom'

interface IProps {
  name: string
  _id: number
}

export default function CartItemTitle({ name, _id }: IProps) {
  return (
    <div className="flex justify-between">
      <h3 className="text-sm">
        <Link
          to={`/products/${_id}`}
          className="font-medium text-gray-700 hover:text-gray-800"
        >
          {name}
        </Link>
      </h3>
    </div>
  )
}
