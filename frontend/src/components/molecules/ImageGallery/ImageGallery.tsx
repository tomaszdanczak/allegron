import { IImage } from 'types/product'
import { classNames } from 'helpers'
import { useState } from 'react'

interface IProps {
  images: IImage[]
}

export default function ImageGallery({ images }: IProps) {
  const [imagesGallery, setImagesGallery] = useState(images)

  const handleChangeImage = (id: number) => {
    const selectedImage = images.find((image) => image._id === id) || images[0]
    const imageGalleryWithoutSelectedImage = images.filter((image) => image._id !== id)
    const newImagesGallery = [selectedImage, ...imageGalleryWithoutSelectedImage]
    setImagesGallery(newImagesGallery)
  }

  return (
    <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
      <h2 className="sr-only">Images</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
        {imagesGallery.map((image, index) => (
          <img
            key={image._id}
            src={image.imageSrc}
            alt={image.imageAlt}
            onClick={() => handleChangeImage(image._id)}
            className={classNames(index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'rounded-lg')}
          />
        ))}
      </div>
    </div>
  )
}
