import MessageBox from 'components/atoms/MessageBox/MessageBox'
import PaymentMethodInput from 'components/molecules/PaymentMethodInput/PaymentMethodInput'
import { Formik, Form, ErrorMessage } from 'formik'
import { usePaymentMethod } from 'hooks/usePaymentMethod'
import * as Yup from 'yup'
import OrderSummaryWithProducts from '../OrderSummaryWithProducts/OrderSummaryWithProducts'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  paymentType: Yup.string().required('Select payment method'),
})
interface IFormValues {
  paymentType: string
}

export default function PaymentMethodForm() {
  const { setPaymentMethod, paymentMethod } = usePaymentMethod()
  const navigate = useNavigate()

  const handleSubmit = (values: IFormValues) => {
    setPaymentMethod(values.paymentType)
    localStorage.setItem('paymentMethod', values.paymentType)
    navigate('/placeorder')
  }

  return (
    <Formik initialValues={{ paymentType: paymentMethod }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <h2 className="mb-4 text-lg font-medium text-gray-900">Payment Method</h2>

                <ErrorMessage name="paymentType">{(msg) => <MessageBox variant="error">{msg}</MessageBox>}</ErrorMessage>

                <div className="mt-8">
                  <legend className="sr-only">Payment type</legend>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <PaymentMethodInput type="radio" name="paymentType" value="paypal" label="PayPal" />

                    <PaymentMethodInput type="radio" name="paymentType" value="stripe" label="Stripe" />
                  </div>
                </div>
              </div>

              <OrderSummaryWithProducts />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
