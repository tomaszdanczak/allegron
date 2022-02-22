import { useRegisterMutation } from 'app/api/userApi'
import Button from 'components/atoms/Button/Button'
import TextInput from 'components/molecules/TextInput/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'

interface IFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const initialValues: IFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Password do not match'),
})

export default function RegisterForm() {
  const [register, { isLoading, isError }] = useRegisterMutation()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (values: IFormValues) => {
    if (values.password !== values.confirmPassword) {
      alert('Password and confirm password are not match')
    } else {
      try {
        const response = await register(values)

        // Error response type guards
        if ('error' in response) {
          const { data }: any = response.error

          if ('originalStatus' in response.error) {
            setErrorMsg(`Request failed with status code ${response.error.originalStatus}.`)
          } else if ('status' in response.error) {
            setErrorMsg(`Request failed with status code ${response.error.status}. ${data.message}`)
          }
        }
      } catch {}
    }
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-6">
          {isLoading && <LoadingBox />}
          {isError && <MessageBox variant="error">{`${errorMsg}`}</MessageBox>}

          <TextInput label="Name" name="name" type="text" placeholder="Enter name" />

          <TextInput label="Email Address" name="email" type="email" placeholder="Enter email" />

          <TextInput label="Password" name="password" type="password" placeholder="password" />

          <TextInput label="Confirm Password" name="confirmPassword" type="password" placeholder="password" />

          <Button text="Register" type="submit" variant="small" />
        </Form>
      </Formik>
    </>
  )
}
