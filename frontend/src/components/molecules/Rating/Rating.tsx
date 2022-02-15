import { StarIcon } from '@heroicons/react/solid'
import { classNames } from 'helpers'

interface IProps {
  rating: number
}

export default function Rating({ rating }: IProps) {
  return (
    <div className="ml-1 flex items-center">
      {[0, 1, 2, 3, 4].map((num) => (
        <StarIcon
          key={num}
          className={classNames(
            rating > num ? 'text-yellow-400' : 'text-gray-200',
            'h-5 w-5 flex-shrink-0',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
