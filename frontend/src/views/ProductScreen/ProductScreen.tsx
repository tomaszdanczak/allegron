import { useGetProductQuery } from 'app/api/productApi'
import Button from 'components/atoms/Button/Button'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import ProductDescription from 'components/atoms/ProductDescription/ProductDescription'
import ProductDetailHeader from 'components/atoms/ProductDetailHeader/ProductDetailHeader'
import ProductDetails from 'components/atoms/ProductDetails/ProductDetails'
import Review from 'components/molecules/Review/Review'
import { useCurrency } from 'hooks/useCurrency'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IProduct } from 'types/product'
import Policies from 'components/molecules/Policies/Policies'
import ImageGallery from 'components/molecules/ImageGallery/ImageGallery'
import { useCart } from 'hooks/useCart'

let errorMsg: string

export default function ProductScreen() {
  const params = useParams()
  const { id: productId = '' } = params
  const navigate = useNavigate()

  const { currency } = useCurrency()
  const { addToCart } = useCart()

  const {
    data: product = {} as IProduct,
    isLoading,
    isError,
    error = {},
  } = useGetProductQuery(productId)

  const { name, prices = [] } = product
  const priceInfo =
    prices.find((price) => price.currency === currency) || prices[0]

  // Type guard
  if ('status' in error) {
    const { data }: any = error

    if ('originalStatus' in error) {
      errorMsg = `Request failed with status code ${error.originalStatus}.`
    } else if ('status' in error) {
      errorMsg = `Request failed with status code ${error.status}. ${data.message}`
    }
  }

  const addToCartHandler = (quantity: number) => {
    const cartItem = {
      _id: product._id,
      name: product.name,
      prices: product.prices,
      image:
        product.images.find((image) => image.primary === true) ||
        product.images[0],
      countInStock: product.countInStock,
      quantity,
    }

    navigate('/cart')
    addToCart(cartItem)
  }

  return (
    <div>
      {isLoading ? (
        <LoadingBox />
      ) : isError ? (
        <MessageBox variant="error">{errorMsg}</MessageBox>
      ) : (
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="mb-2 ml-2 lg:col-span-7 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:mb-4 lg:ml-4 lg:mt-0">
            <Link
              to="/"
              className="block text-indigo-500 hover:text-indigo-600"
            >
              ← Back to result
            </Link>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
            <ProductDetailHeader name={name} priceInfo={priceInfo} />
            <Review rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          <div className=" lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:mt-0">
            <ImageGallery images={product.images} />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-3">
            <div className="mt-8">
              <Button text="Add to cart" onClick={() => addToCartHandler(1)} />
            </div>

            <ProductDescription description={product.description} />
            <ProductDetails details={product.details} />
            <Policies />
          </div>
        </div>
      )}
    </div>
  )
}
