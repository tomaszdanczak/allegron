import { useGetProductQuery } from 'app/api/productApi'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import { useParams } from 'react-router-dom'
import { IProduct } from 'types/product'

let errorMsg: string

export default function ProductScreen() {
  const params = useParams()
  const { id: productId = '' } = params
  const {
    data: product = {} as IProduct,
    isLoading,
    isError,
    error = {},
  } = useGetProductQuery(productId)

  // TODO: Type guard
  if ('originalStatus' in error) {
    errorMsg = `Request failed with status code ${error.originalStatus}`
  }

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : isError ? (
        <MessageBox variant="error">{errorMsg}</MessageBox>
      ) : (
        <pre>{JSON.stringify(product, null, 2)}</pre>
      )}
    </div>
  )
}
