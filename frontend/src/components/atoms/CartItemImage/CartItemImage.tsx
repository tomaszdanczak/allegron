import { Link } from 'react-router-dom'
import { IImage } from 'types/product'

interface IProps {
  image: IImage
  _id: number
}

export default function CartItemImage({ image, _id }: IProps) {
  return (
    <Link to={`/products/${_id}`}>
      <div className="flex-shrink-0">
        <img src={image.imageSrc} alt={image.imageAlt} className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
      </div>
    </Link>
  )
}
