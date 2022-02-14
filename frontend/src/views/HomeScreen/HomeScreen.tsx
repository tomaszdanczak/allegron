import { useGetProductsQuery } from 'app/api/productsApi'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'

export default function HomeScreen() {
  const { data, isLoading } = useGetProductsQuery()

  console.log('data:', data)

  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          products
        </div>
      )}
    </>
  )
}
