import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  return <>{children}</>
}
