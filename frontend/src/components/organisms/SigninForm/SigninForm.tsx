import { Formik, Form, useField, FieldHookConfig } from 'formik'
import * as Yup from 'yup'

interface IFormValues {
  email: string
  password: string
}

interface IMyProps {
  label: string
}

const MyTextInput = (props: IMyProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className="" {...field} />
      {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
    </>
  )
}

export default function SigninForm() {
  const initialValues: IFormValues = {
    email: '',
    password: '',
  }
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is equired'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className="">
          <MyTextInput label="Email Address" name="email" type="email" placeholder="Type your email" />

          <MyTextInput label="Password" name="password" type="text" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}
