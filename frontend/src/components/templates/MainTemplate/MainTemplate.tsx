import Banner from 'components/atoms/Banner/Banner'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  return (
    <>
      <header>
        <Banner />
      </header>
      <body>{children}</body>
    </>
  )
}
