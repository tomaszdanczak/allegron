import RadioInput from 'components/molecules/RadioInput/RadioInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import OrderSummaryWithProducts from '../OrderSummaryWithProducts/OrderSummaryWithProducts'

const validationSchema = Yup.object({
  paymentType: Yup.string().required('Select payment method'),
})

const initialValues = {
  paymentType: '',
}

export default function PaymentMethodForm() {
  const handleSubmit = (values: any) => {
    console.log('values:', values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="mt-4">
                    <legend className="sr-only">Payment type</legend>

                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <RadioInput type="radio" name="paymentType" value="paypal" label="PayPal" />

                      <RadioInput type="radio" name="paymentType" value="stripe" label="Stripe" />
                    </div>
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
