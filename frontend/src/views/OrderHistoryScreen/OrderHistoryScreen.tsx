import { useGetMineOrdersQuery } from 'app/api/ordersApi'
import { selectCurrentUser } from 'app/authSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function OrderHistoryScreen() {
  const userInfo = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  const response = useGetMineOrdersQuery()
  const { data } = response
  console.log('response:', response)
  console.log(data)

  useEffect(() => {
    if (!userInfo.name) {
      navigate('/')
    }
  }, [userInfo, navigate])
  return <div>OrderHistoryScreen</div>
}
