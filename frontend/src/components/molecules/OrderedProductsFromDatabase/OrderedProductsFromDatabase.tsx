import { Link } from 'react-router-dom'

interface IImage {
  imageSrc: string
  imageAlt: string
}

interface IOrderedItem {
  _id: string
  image: IImage
  name: string
  description: string
  quantity: number
  price: string
}

interface IProps {
  orderedItems: IOrderedItem[]
}

export default function OrderedProductsFromDatabase({ orderedItems }: IProps) {
  return (
    <div>
      {orderedItems.map((orderedItem: any) => {
        return (
          <div key={orderedItem._id} className="mt-2 flex space-x-6 border-b border-gray-200 py-10">
            <img
              src={orderedItem.image.imageSrc}
              alt={orderedItem.image.imageAlt}
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <Link to={`/products/${'_id'}`}>{orderedItem.name}</Link>
                </h4>
                <p className="mt-2 text-sm text-gray-600">{orderedItem.description}</p>
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-900">Quantity</dt>
                    <dd className="ml-2 text-gray-700">{orderedItem.quantity}</dd>
                  </div>
                  <div className="flex pl-4 sm:pl-6">
                    <dt className="font-medium text-gray-900">Price</dt>
                    <dd className="ml-2 text-gray-700">{orderedItem.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
