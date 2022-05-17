import OrderHistoryProductItem from 'components/molecules/OrderHistoryProductItem/OrderHistoryProductItem'

interface IProps {
  orders: any[]
}

export default function OrderHistoryItems({ orders }: IProps) {
  console.log('orders:', orders)

  return (
    <div>
      {orders.map((order) => {
        const day = new Date(order.createdAt).getDate()
        const fullYear = new Date(order.createdAt).getFullYear()
        const month = new Date(order.createdAt).getMonth()
        console.log('day:', day)
        const date = `${day}.${month + 1}.${fullYear}`

        return (
          <div key={order._id} className="mb-8 border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
            <h3 className="sr-only">
              Order placed on <time dateTime={order.createdAt}>{order.createdAt}</time>
            </h3>

            <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
              <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-3">
                <div>
                  <dt className="font-medium text-gray-900">Order number</dt>
                  <dd className="mt-1 truncate text-gray-500">{order._id}</dd>
                </div>

                <div className="hidden sm:block">
                  <dt className="font-medium text-gray-900">Date placed</dt>
                  <dd className="mt-1 text-gray-500">
                    <time dateTime={date}>{date}</time>
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-gray-900">Total amount</dt>
                  <dd className="mt-1 font-medium text-gray-900">{order.orderPrices?.totalPrice}</dd>
                </div>
              </dl>

              <div className=" lg:col-span-1 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                <a
                  href={order._id}
                  className="flex items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>View Order</span>
                  <span className="sr-only">{order._id}</span>
                </a>
              </div>
            </div>

            {/* Products */}
            <OrderHistoryProductItem />
            <OrderHistoryProductItem />
            <h4 className="sr-only">Items</h4>
          </div>
        )
      })}
    </div>
  )
}
