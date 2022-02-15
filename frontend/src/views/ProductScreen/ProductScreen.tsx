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

  // Type guard
  if ('status' in error) {
    const { data }: any = error

    if ('originalStatus' in error) {
      errorMsg = `Request failed with status code ${error.originalStatus}.`
    } else if ('status' in error) {
      errorMsg = `Request failed with status code ${error.status}. ${data.message}`
    }
  }

  console.log('product:', product)

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : isError ? (
        <MessageBox variant="error">{errorMsg}</MessageBox>
      ) : (
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            ImageGallery
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div>ProductDetailHeader</div>
            <div>Review</div>
            <div>Button</div>
            <div>ProductDescription</div>
            <div>ProductDetails</div>
            <div>Policies</div>
          </div>
        </div>
      )}
    </div>
  )
}
