import { selectCurrentUser } from 'app/authSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function OrderHistoryScreen() {
  const userInfo = useSelector(selectCurrentUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo.name) {
      navigate('/')
    }
  }, [userInfo, navigate])
  return <div>OrderHistoryScreen</div>
}
