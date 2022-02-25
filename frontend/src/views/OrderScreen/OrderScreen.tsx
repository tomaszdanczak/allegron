import { useGetOrderQuery } from 'app/api/ordersApi'
import OrderedProductsFromDatabase from 'components/molecules/OrderedProductsFromDatabase/OrderedProductsFromDatabase'
import OrderInformationFromBackend from 'components/molecules/OrderInformationFromBackend/OrderInformationFromBackend'
import { useParams } from 'react-router-dom'

export default function OrderScreen() {
  const params = useParams()
  const { id: orderId = '' } = params

  const { data = { orderedItems: [], shippingAddress: {}, orderPrices: {} } } = useGetOrderQuery(orderId)

  console.log('response:', data)

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 border-b border-gray-200 pb-3 text-3xl font-extrabold tracking-tight text-gray-900">Order {data._id}</h1>
      <OrderedProductsFromDatabase orderedItems={data.orderedItems} />
      <OrderInformationFromBackend shippingAddress={data.shippingAddress} orderPrices={data.orderPrices} />
    </div>
  )
}
