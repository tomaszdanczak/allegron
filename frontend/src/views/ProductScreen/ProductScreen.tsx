import { useGetProductQuery } from 'app/api/productApi'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import { useParams } from 'react-router-dom'
import { IProduct } from 'types/product'

export default function ProductScreen() {
  const params = useParams()
  const { id: productId = '' } = params
  const { data: product = {} as IProduct, isLoading } =
    useGetProductQuery(productId)

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <pre>{JSON.stringify(product, null, 2)}</pre>
      )}
    </div>
  )
}
