import CheckoutSteps from 'components/molecules/CheckoutSteps/CheckoutSteps'
import PaymentMethodForm from 'components/organisms/PaymentMethodForm/PaymentMethodForm'

export default function PaymentMethodScreen() {
  return (
    <div>
      <CheckoutSteps currentStep={3} />
      <PaymentMethodForm />
    </div>
  )
}
