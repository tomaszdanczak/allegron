import { IPrice } from 'types/product'
import { displaySelectedCurrency } from 'helpers/index'

interface IProps {
  name: string
  priceInfo: IPrice
}

export default function ProductDetailHeader({ name, priceInfo }: IProps) {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-medium text-gray-900">{name}</h1>
      <p className="text-xl font-medium text-gray-900">
        {`${displaySelectedCurrency(priceInfo.currency)}${priceInfo.price}`}
      </p>
    </div>
  )
}
