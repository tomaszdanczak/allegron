const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    description:
      'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
    href: '#',
    price: '$70.00',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
    imageAlt: 'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]

export default function OrderHistoryProductItem() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {products.map((product: any) => (
          <li key={product.id} className="p-4 sm:p-6">
            <div className="flex items-center sm:items-start">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
              </div>
              <div className="ml-6 flex-1 text-sm">
                <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                  <h5>{product.name}</h5>
                  <p className="mt-2 sm:mt-0">{product.price}</p>
                </div>
                <p className="hidden text-gray-500 sm:mt-2 sm:block">{product.description}</p>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:justify-between">
              <div className="flex items-center">
                {/* <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" /> */}
                <p className="ml-2 text-sm font-medium text-gray-500">
                  Delivered on <time dateTime={'deliveredDatetime'}>{'deliveredDate'}</time>
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                <div className="flex flex-1 justify-center">
                  <a href={product.href} className="whitespace-nowrap text-indigo-600 hover:text-indigo-500">
                    View product
                  </a>
                </div>
                <div className="flex flex-1 justify-center pl-4">
                  <a href="#" className="whitespace-nowrap text-indigo-600 hover:text-indigo-500">
                    Buy again
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
