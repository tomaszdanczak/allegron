import React, { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  srOnly: string
  link: string
}

export default function SocialLink({ icon, srOnly, link }: Props) {
  return (
    <a href={link} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{srOnly}</span>
      {icon}
    </a>
  )
}
