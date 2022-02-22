import RegisterScreenHeader from 'components/molecules/RegisterScreenHeader/RegisterScreenHeader'
import RegisterForm from 'components/organisms/RegisterForm/RegisterForm'

export default function RegisterScreen() {
  return (
    <div className="h-full bg-gray-50 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterScreenHeader />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
