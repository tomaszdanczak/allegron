import { MouseEvent } from 'react'

interface IProps {
  text: string
  disabled?: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ text, onClick, disabled }: IProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
    >
      {text}
    </button>
  )
}
