import { useGetOrderQuery } from 'app/api/ordersApi'
import { useParams } from 'react-router-dom'

export default function OrderScreen() {
  const params = useParams()
  const { id: orderId = '' } = params

  const response = useGetOrderQuery(orderId)

  console.log('response:', response)

  return (
    <div>
      OrderScreen
      <div>{orderId}</div>
    </div>
  )
}
