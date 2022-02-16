import { ClockIcon, CheckIcon } from '@heroicons/react/solid'
import { IDeliveryInfo } from 'types/product'

interface IProps {
  deliveryInfo: IDeliveryInfo
}

export default function LeadTime({ deliveryInfo }: IProps) {
  return (
    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
      {deliveryInfo.inStock ? (
        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
      ) : (
        <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
      )}

      <span>{deliveryInfo.inStock ? 'In stock' : `Ships in ${deliveryInfo.leadTime}`}</span>
    </p>
  )
}
