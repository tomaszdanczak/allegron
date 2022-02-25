import { useParams } from 'react-router-dom'

export default function OrderScreen() {
  const params = useParams()
  const { id: orderId = '' } = params

  return (
    <div>
      OrderScreen
      <div>{orderId}</div>
    </div>
  )
}
