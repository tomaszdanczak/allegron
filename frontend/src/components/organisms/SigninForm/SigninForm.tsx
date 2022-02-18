import Button from 'components/atoms/Button/Button'
import RememberMe from 'components/atoms/RememberMe/RememberMe'
import SigninOptions from 'components/molecules/SigninOptions/SigninOptions'
import TextInput from 'components/molecules/TextInput/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useSigninMutation } from 'app/api/userApi'
import MessageBox from 'components/atoms/MessageBox/MessageBox'
import { useState } from 'react'
import LoadingBox from 'components/atoms/LoadingBox/LoadingBox'
import { useDispatch } from 'react-redux'
import { setCredentials } from 'app/authSlice'

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
  const [signIn, { isError, isLoading }] = useSigninMutation()
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (values: IFormValues) => {
    try {
      const response = await signIn(values)

      // Error response type guards
      if ('error' in response) {
        const { data }: any = response.error

        if ('originalStatus' in response.error) {
          setErrorMsg(`Request failed with status code ${response.error.originalStatus}.`)
        } else if ('status' in response.error) {
          setErrorMsg(`Request failed with status code ${response.error.status}. ${data.message}`)
        }
      }

      // Response with userInfo type guard
      if ('data' in response) {
        const userInfo = response.data
        dispatch(setCredentials(userInfo))
      }
    } catch {}
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-6">
          {isLoading && <LoadingBox />}
          {isError && <MessageBox variant="error">{`${errorMsg}`}</MessageBox>}

          <TextInput label="Email Address" name="email" type="email" placeholder="Type your email" />

          <TextInput label="Password" name="password" type="password" />

          <RememberMe />

          <Button text="Submit" type="submit" variant="small" />

          <SigninOptions />
        </Form>
      </Formik>
    </>
  )
}
