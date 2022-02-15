import { MouseEvent } from 'react'

interface IProps {
  text: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ text, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  )
}
