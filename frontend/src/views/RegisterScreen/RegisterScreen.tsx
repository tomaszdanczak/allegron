import { selectCurrentUser } from 'app/authSlice'
import RegisterScreenHeader from 'components/molecules/RegisterScreenHeader/RegisterScreenHeader'
import RegisterForm from 'components/organisms/RegisterForm/RegisterForm'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function RegisterScreen() {
  const userInfo = useSelector(selectCurrentUser)

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo?.name) {
      navigate('/')
    }
  }, [userInfo, navigate])

  return (
    <div className="h-full bg-gray-50 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterScreenHeader />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
