import { useGetMineOrdersQuery } from 'app/api/ordersApi'
import { selectCurrentUser } from 'app/authSlice'
import OrderHistoryItems from 'components/organisms/OrderHistoryItems/OrderHistoryItems'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function OrderHistoryScreen() {
  const userInfo = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  const response = useGetMineOrdersQuery()
  const { data: orders = [{ products: [], _id: '' }] } = response
  console.log('response:', response)
  console.log(orders)

  useEffect(() => {
    if (!userInfo.name) {
      navigate('/')
    }
  }, [userInfo, navigate])
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
            <p className="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              <OrderHistoryItems orders={orders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
