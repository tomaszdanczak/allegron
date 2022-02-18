import SigninScreenHeader from 'components/molecules/SigninScreenHeader/SigninScreenHeader'
import SigninForm from 'components/organisms/SigninForm/SigninForm'
import { selectCurrentUser } from 'app/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SigninScreen() {
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
        <SigninScreenHeader />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SigninForm />
        </div>
      </div>
    </div>
  )
}
