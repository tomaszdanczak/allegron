import { useParams } from 'react-router-dom'

export default function ProductScreen() {
  const params = useParams()
  const { id: productId } = params

  return <div>{productId}</div>
}
