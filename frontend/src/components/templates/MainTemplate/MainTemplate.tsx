import Banner from 'components/atoms/Banner/Banner'
import Navigation from 'components/molecules/Navigation/Navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  return (
    <>
      <header>
        <Banner />
        <Navigation />
      </header>
      <div>{children}</div>
    </>
  )
}
