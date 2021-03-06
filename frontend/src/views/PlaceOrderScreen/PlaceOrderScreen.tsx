import CheckoutSteps from 'components/molecules/CheckoutSteps/CheckoutSteps'
import OrderedProducts from 'components/molecules/OrderedProducts/OrderedProducts'
import OrderInformation from 'components/molecules/OrderInformation/OrderInformation'
import { usePaymentMethod } from 'hooks/usePaymentMethod'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlaceOrderScreen() {
  const { paymentMethod } = usePaymentMethod()
  const navigate = useNavigate()

  useEffect(() => {
    if (paymentMethod === '') {
      navigate('/payment')
    }
  }, [paymentMethod, navigate])

  return (
    <div>
      <CheckoutSteps currentStep={4} />
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 border-b border-gray-200 pb-3 text-3xl font-extrabold tracking-tight text-gray-900">Order Details</h1>

        <OrderInformation />
        <OrderedProducts />
      </div>
    </div>
  )
}
