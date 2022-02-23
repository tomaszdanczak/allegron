import Button from 'components/atoms/Button/Button'

export default function OrderInformation() {
  return (
    <div className="mt-24">
      <h2 className="sr-only">Billing Summary</h2>

      <div className="rounded-lg bg-gray-50 py-6 px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 lg:py-8">
        <dl className="text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-5 lg:pl-8">
          <div className="w-full ">
            <dt className="w-full font-medium text-gray-900">Billing address</dt>
            <dd className="mt-3 w-full text-gray-500">
              <span className="block">Floyd Miles</span>
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </dd>
          </div>
        </dl>

        <dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-7 lg:mt-0 lg:pr-8">
          <div className="flex items-center justify-between pb-4">
            <dt className="text-gray-600">Subtotal</dt>
            <dd className="font-medium text-gray-900">$72</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Shipping</dt>
            <dd className="font-medium text-gray-900">$5</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-gray-600">Tax</dt>
            <dd className="font-medium text-gray-900">$6.16</dd>
          </div>
          <div className="flex items-center justify-between pt-4">
            <dt className="font-medium text-gray-900">Order total</dt>
            <dd className="font-medium text-indigo-600">$83.16</dd>
          </div>
          <div className="mt-8">
            <Button variant="big" text="Order" />
          </div>
        </dl>
      </div>
    </div>
  )
}
