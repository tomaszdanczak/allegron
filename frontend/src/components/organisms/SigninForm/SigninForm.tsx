import TextInput from 'components/molecules/TextInput/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

interface IFormValues {
  email: string
  password: string
}

const initialValues: IFormValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is equired'),
  password: Yup.string().required('Password is required'),
})

export default function SigninForm() {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className="">
          <TextInput label="Email Address" name="email" type="email" placeholder="Type your email" />

          <TextInput label="Password" name="password" type="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}
