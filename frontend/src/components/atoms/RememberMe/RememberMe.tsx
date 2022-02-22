import { Link } from 'react-router-dom'

interface IProps {
  link: 'signin' | 'register'
}

export default function RememberMe({ link }: IProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        {link === 'signin' && 'Already registred? '}

        <Link to={`/${link}`} className="font-medium text-indigo-600 hover:text-indigo-500">
          {link === 'register' && 'Create your account'}
          {link === 'signin' && 'Sign In'}
        </Link>
      </div>
    </div>
  )
}
