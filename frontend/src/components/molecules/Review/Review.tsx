import Rating from 'components/molecules/Rating/Rating'

interface IProps {
  rating: number
  reviewCount: number
}

export default function Review({ rating, reviewCount }: IProps) {
  return (
    <div className="mt-4">
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {rating}
          <span className="sr-only"> out of 5 stars</span>
        </p>

        <Rating rating={rating} />

        <div className="ml-8 flex">
          <p className="text-sm font-medium text-indigo-600">
            {reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  )
}
