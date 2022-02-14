import { useGetProductsQuery } from 'app/api/productsApi'

export default function HomeScreen() {
  const { data } = useGetProductsQuery()

  console.log('data:', data)

  return <div>HomeScreen</div>
}
