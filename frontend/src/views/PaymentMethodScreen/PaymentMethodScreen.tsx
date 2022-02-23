import CheckoutSteps from 'components/molecules/CheckoutSteps/CheckoutSteps'
import PaymentMethodForm from 'components/organisms/PaymentMethodForm/PaymentMethodForm'
import { useEffect } from 'react'
import { useShippingInfo } from 'hooks/useShippingInfo'
import { useNavigate } from 'react-router-dom'

export default function PaymentMethodScreen() {
  const { shippingInfo } = useShippingInfo()
  const navigate = useNavigate()

  useEffect(() => {
    if (shippingInfo.address === '') {
      navigate('/shipping')
    }
  }, [shippingInfo, navigate])

  return (
    <div>
      <CheckoutSteps currentStep={3} />
      <PaymentMethodForm />
    </div>
  )
}
