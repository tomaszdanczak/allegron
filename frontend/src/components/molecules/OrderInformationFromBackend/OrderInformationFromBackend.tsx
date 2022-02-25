export default function OrderInformationFromBackend({ shippingAddress, orderPrices }: any) {
  return (
    <div className="mt-10">
      <h2 className="sr-only">Billing Summary</h2>

      <div className="rounded-lg bg-gray-50 py-6 px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 lg:py-8">
        <dl className="text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-5 lg:pl-8">
          <div className="w-full ">
            <dt className="w-full font-medium text-gray-900">Billing address</dt>
            <dd className="mt-3 w-full text-gray-500">
              <span className="block">{`${shippingAddress.firstName} ${shippingAddress.lastName}`}</span>
              <span className="block">{shippingAddress.address}</span>
              <span className="block">{`${shippingAddress.city}, ${shippingAddress.country}`}</span>
            </dd>
          </div>
        </dl>

        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-7 lg:mt-0 lg:pr-8">
          <div className="flex items-center justify-between pb-4">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium text-gray-900">{`${orderPrices.itemsPrice}`}</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="font-medium text-gray-900">{`${orderPrices.shippingPrice}`}</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Tax</dt>
            <dd className="font-medium text-gray-900">{`${orderPrices.taxPrice}`}</dd>
          </div>
          <div className="flex items-center justify-between pt-4">
            <dt className="font-medium text-gray-900">Order total</dt>
            <dd className="font-medium text-indigo-600">{`${orderPrices.totalPrice}`}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
