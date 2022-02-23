import { useField } from 'formik'
import { classNames } from 'helpers'
import { CheckCircleIcon } from '@heroicons/react/solid'

type IInputProps = JSX.IntrinsicElements['input'] & {
  label: string
  name: string
}

export default function PaymentMethodInput({ label, name, ...props }: IInputProps): JSX.Element {
  const [field] = useField(name)

  return (
    <div
      className={classNames(
        props.value === field.value ? 'ring-2 ring-indigo-500' : '',
        'relative  cursor-pointer items-center rounded-lg border bg-white p-4 shadow-sm focus:outline-none ',
      )}
    >
      <label className="transparent absolute inset-0">
        <input className="hidden" {...field} {...props} />
      </label>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="block text-sm font-medium text-gray-900">{label}</span>
          <span className="mt-1 flex items-center text-sm text-gray-500">{`Pay with ${label}`}</span>
        </div>

        {props.value === field.value ? <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" /> : null}
      </div>
    </div>
  )
}
