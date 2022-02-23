const products = [
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
]

export default function OrderedProducts() {
  return (
    <div>
      {' '}
      {products.map((product) => (
        <div key={product.id} className="flex space-x-6 border-b border-gray-200 py-10">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
          />
          <div className="flex flex-auto flex-col">
            <div>
              <h4 className="font-medium text-gray-900">
                <a href={product.href}>{product.name}</a>
              </h4>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            </div>
            <div className="mt-6 flex flex-1 items-end">
              <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                <div className="flex">
                  <dt className="font-medium text-gray-900">Quantity</dt>
                  <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                </div>
                <div className="flex pl-4 sm:pl-6">
                  <dt className="font-medium text-gray-900">Price</dt>
                  <dd className="ml-2 text-gray-700">{product.price}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
