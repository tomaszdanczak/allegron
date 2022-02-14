import { classNames } from 'helpers'
interface IProps {
  children: string
  variant: 'info' | 'error' | 'success'
}

export default function MessageBox({ variant, children }: IProps) {
  return (
    <div
      className={classNames(
        variant === 'info' ? 'bg-blue-300 text-blue-600' : '',
        variant === 'error' ? ' bg-red-200 text-red-600' : '',
        variant === 'success' ? ' bg-green-200 text-green-600' : '',
        'm-2 rounded-md border-2 border-transparent p-3',
      )}
    >
      {children}
    </div>
  )
}
