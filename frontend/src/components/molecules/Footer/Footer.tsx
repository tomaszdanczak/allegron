import SocialLink from 'components/atoms/SocialLink/SocialLink'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-icon.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter-icon.svg'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLink srOnly="Facebook" link="https://www.facebook.com" icon={<FacebookIcon className="h-6 w-6" />} />
          <SocialLink srOnly="Instagram" link="https://www.instagram.com" icon={<InstagramIcon className="h-6 w-6" />} />
          <SocialLink srOnly="Twitter" link="https://www.twitter.com" icon={<TwitterIcon className="h-6 w-6" />} />
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Allegron, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
