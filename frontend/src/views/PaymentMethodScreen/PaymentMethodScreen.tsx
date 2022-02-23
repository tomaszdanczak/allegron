import CheckoutSteps from 'components/molecules/CheckoutSteps/CheckoutSteps'
import PaymentMethodForm from 'components/organisms/PaymentMethodForm/PaymentMethodForm'
import { useEffect } from 'react'
import { useShippingInfo } from 'hooks/useShippingInfo'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'hooks/useCart'

export default function PaymentMethodScreen() {
  const { shippingInfo } = useShippingInfo()
  const { cartItems } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    if (shippingInfo.address === '') {
      navigate('/shipping')
    }

    if (cartItems.length === 0) {
      navigate('/cart')
    }
  }, [shippingInfo, cartItems, navigate])

  return (
    <div>
      <CheckoutSteps currentStep={3} />
      <PaymentMethodForm />
    </div>
  )
}
