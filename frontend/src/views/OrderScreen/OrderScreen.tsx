import { useGetOrderQuery } from 'app/api/ordersApi'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import OrderedProductsFromDatabase from 'components/molecules/OrderedProductsFromDatabase/OrderedProductsFromDatabase'
import OrderInformationFromBackend from 'components/molecules/OrderInformationFromBackend/OrderInformationFromBackend'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OrderScreen() {
  const params = useParams()
  const { id: orderId = '' } = params
  const [errorMsg, setErrorMsg] = useState('')

  const { data = { orderedItems: [], shippingAddress: {}, orderPrices: {} }, isLoading, isError, isSuccess, error = {} } = useGetOrderQuery(orderId)

  // Type guard
  if ('status' in error) {
    const { data }: any = error

    if ('originalStatus' in error) {
      setErrorMsg(`Request failed with status code ${error.originalStatus}.`)
    } else if ('status' in error) {
      setErrorMsg(`Request failed with status code ${error.status}. ${data.message}`)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 border-b border-gray-200 pb-3 text-3xl font-extrabold tracking-tight text-gray-900">Order {data._id}</h1>
      {isLoading && <LoadingBox />}
      {isError && <MessageBox variant="error">{`${errorMsg}`}</MessageBox>}
      {isSuccess && (
        <>
          <OrderedProductsFromDatabase orderedItems={data.orderedItems} />
          <OrderInformationFromBackend shippingAddress={data.shippingAddress} orderPrices={data.orderPrices} />
        </>
      )}
    </div>
  )
}
