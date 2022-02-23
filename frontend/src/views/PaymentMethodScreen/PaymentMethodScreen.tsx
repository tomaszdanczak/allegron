import CheckoutSteps from 'components/molecules/CheckoutSteps/CheckoutSteps'
import PaymentMethodForm from 'components/organisms/PaymentMethodForm/PaymentMethodForm'
import { useEffect } from 'react'
import { useShippingInfo } from 'hooks/useShippingInfo'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'hooks/useCart'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'app/authSlice'

export default function PaymentMethodScreen() {
  const { shippingInfo } = useShippingInfo()
  const { cartItems } = useCart()
  const userInfo = useSelector(selectCurrentUser)

  const navigate = useNavigate()

  useEffect(() => {
    if (shippingInfo.address === '') {
      navigate('/shipping')
    }

    if (cartItems.length === 0) {
      navigate('/cart')
    }

    if (!userInfo.name) {
      navigate('/signin')
    }
  }, [shippingInfo, cartItems, userInfo, navigate])

  return (
    <div>
      <CheckoutSteps currentStep={3} />
      <PaymentMethodForm />
    </div>
  )
}
