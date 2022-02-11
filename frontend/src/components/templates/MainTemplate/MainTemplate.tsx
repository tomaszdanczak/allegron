import Banner from 'components/atoms/Banner/Banner'
import Footer from 'components/molecules/Footer/Footer'
import Navigation from 'components/molecules/Navigation/Navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Banner />
        <Navigation />
      </header>
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pt-8 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}
