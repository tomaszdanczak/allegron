import React, { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  srOnly: string
}

export default function LoginOption({ icon, srOnly }: Props) {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <span className="sr-only">{srOnly}</span>
      {icon}
    </button>
  )
}
