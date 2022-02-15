import { useGetProductQuery } from 'app/api/productApi'
import { useParams } from 'react-router-dom'
import { IProduct } from 'types/product'

export default function ProductScreen() {
  const params = useParams()
  const { id: productId = '' } = params
  const { data: product = {} as IProduct } = useGetProductQuery(productId)
  console.log('data:', product)

  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}
