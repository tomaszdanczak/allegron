import SigninScreenHeader from 'components/molecules/SigninScreenHeader/SigninScreenHeader'
import SigninForm from 'components/organisms/SigninForm/SigninForm'

export default function SigninScreen() {
  return (
    <div className="h-full bg-gray-50 p-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <SigninScreenHeader />
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SigninForm />
        </div>
      </div>
    </div>
  )
}
