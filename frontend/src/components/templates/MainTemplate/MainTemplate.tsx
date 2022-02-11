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
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
