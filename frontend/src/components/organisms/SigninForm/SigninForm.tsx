import Button from 'components/atoms/Button/Button'
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
        <Form className="space-y-6">
          <TextInput label="Email Address" name="email" type="email" placeholder="Type your email" />

          <TextInput label="Password" name="password" type="password" />

          <Button text="Submit" type="submit" variant="small" />
        </Form>
      </Formik>
    </>
  )
}
