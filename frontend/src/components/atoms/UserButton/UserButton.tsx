import { UserIcon } from '@heroicons/react/outline'
import { selectCurrentUser } from 'app/authSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function UserButton() {
  const userInfo = useSelector(selectCurrentUser)

  return (
    <>
      {userInfo.name && (
        <Link to="/orderhistory" className="ml-4 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Account</span>
          <UserIcon className="h-6 w-6" aria-hidden="true" />
        </Link>
      )}
    </>
  )
}
