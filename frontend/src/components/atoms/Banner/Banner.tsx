import { Link } from 'react-router-dom'
import { selectCurrentUser, removeCredentials } from 'app/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Banner() {
  const userInfo = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  const singOutHandler = () => {
    dispatch(removeCredentials())
    localStorage.removeItem('userInfo')
  }

  return (
    <div className="bg-indigo-600">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="hidden lg:block lg:flex-1"></span>

        <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">Get free delivery on orders over $100</p>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          {!userInfo.name ? (
            <Link to="/register" className="text-sm font-medium text-white hover:text-gray-100">
              Create an account
            </Link>
          ) : (
            <button className="text-sm font-medium text-white hover:text-gray-100">{userInfo.name}</button>
          )}

          <span className="h-6 w-px bg-gray-600" aria-hidden="true" />

          {!userInfo.name ? (
            <Link to="/signin" className="text-sm font-medium text-white hover:text-gray-100">
              Sign in
            </Link>
          ) : (
            <button onClick={singOutHandler} className="text-sm font-medium text-white hover:text-gray-100">
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
