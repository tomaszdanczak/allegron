import { MouseEvent } from 'react'
import { classNames } from 'helpers'

interface IProps {
  text: string
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
  variant?: 'big' | 'small'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ text, onClick, disabled, variant, type = 'button' }: IProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames(
        variant === 'small' ? 'py-2 px-4 text-sm' : '',
        variant === 'big' ? 'py-3 px-8 text-base' : '',
        'flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300',
      )}
    >
      {text}
    </button>
  )
}
