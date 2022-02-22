import { useField } from 'formik'

type ISelectProps = JSX.IntrinsicElements['select'] & {
  label: string
  name: string
}

export default function SelectBox({ label, name, ...props }: ISelectProps): JSX.Element {
  const [field, meta] = useField(name)
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={props.id || name}>
        {label}
      </label>
      <select
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className="absolute ml-2 text-sm text-red-600">{meta.error}</div> : null}
    </div>
  )
}
