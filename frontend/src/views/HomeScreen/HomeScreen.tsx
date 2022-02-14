import { useGetProductsQuery } from 'app/api/productsApi'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import ProductCard from 'components/molecules/ProductCard/ProductCard'

let errorMsg: string

export default function HomeScreen() {
  const {
    data: products = [],
    isLoading,
    isError,
    error = {},
  } = useGetProductsQuery()

  if ('originalStatus' in error) {
    errorMsg = `Request failed with status code ${error.originalStatus}`
  }

  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      {isLoading ? (
        <LoadingBox />
      ) : isError ? (
        <MessageBox variant="error">{errorMsg}</MessageBox>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}
