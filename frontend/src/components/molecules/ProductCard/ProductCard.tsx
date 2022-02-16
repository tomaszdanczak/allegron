import { IProduct } from 'types/product'
import { useNavigate } from 'react-router-dom'
import { useCurrency } from 'hooks/useCurrency'
import { displayPriceWithCurrency } from 'helpers/index'

export default function ProductCard({ product }: { product: IProduct }) {
  const { color, images, name, prices, _id } = product
  const { currency } = useCurrency()

  const primaryImage = images.find((image) => image.primary === true) || images[0]

  const priceInSelectedCurrency = prices.find((price) => price.currency === currency) || prices[0]

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${_id}`)
  }

  return (
    <div className="group relative" onClick={handleClick}>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={primaryImage?.imageSrc} alt={primaryImage?.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{displayPriceWithCurrency(priceInSelectedCurrency)}</p>
      </div>
    </div>
  )
}
