import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-icon.svg'
import { ReactComponent as GithubIcon } from 'assets/icons/github-icon.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter-icon.svg'
import LoginOption from 'components/atoms/LoginOption/LoginOption'

export default function SigninOptions() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <LoginOption srOnly="Sign in with Facebook" icon={<FacebookIcon className="h-5 w-5" />} />

        <LoginOption srOnly="Sign in with Facebook" icon={<TwitterIcon className="h-5 w-5" />} />

        <LoginOption srOnly="Sign in with Facebook" icon={<GithubIcon className="h-5 w-5" />} />
      </div>
    </div>
  )
}
