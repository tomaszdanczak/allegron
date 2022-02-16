import { IImage } from 'types/product'

interface IProps {
  image: IImage
}

export default function CartItemImage({ image }: IProps) {
  return (
    <div className="flex-shrink-0">
      <img src={image.imageSrc} alt={image.imageAlt} className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
    </div>
  )
}
