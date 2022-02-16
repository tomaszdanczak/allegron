import { ChangeEvent } from 'react'
import _ from 'lodash'

interface IProps {
  _id: number
  quantity: number
  countInStock: number
  name: string
}

export default function SelectQuantity({ _id, quantity, countInStock, name }: IProps) {
  const values = _.range(1, countInStock + 1)

  const changeValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValue = parseInt(e.target.value)

    console.log('currentValue:', currentValue)
  }

  return (
    <>
      <label htmlFor={`quantity-${_id}`} className="sr-only">{`Quantity of ${name}`}</label>
      <select
        value={quantity}
        onChange={(e) => changeValueHandler(e)}
        id={`quantity-${_id}`}
        name={`quantity-${_id}`}
        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  )
}
