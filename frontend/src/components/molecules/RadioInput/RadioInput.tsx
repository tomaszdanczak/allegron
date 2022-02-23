import { useField } from 'formik'

type IInputProps = JSX.IntrinsicElements['input'] & {
  label: string
  name: string
}

export default function RadioInput({ label, name, ...props }: IInputProps): JSX.Element {
  const [field] = useField(name)

  return (
    <div className="flex items-center">
      <input placeholder={props.placeholder} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" {...field} {...props} />
      <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={props.id || name}>
        {label}
      </label>
    </div>
  )
}
