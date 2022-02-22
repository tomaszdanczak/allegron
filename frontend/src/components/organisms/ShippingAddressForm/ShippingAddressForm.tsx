import SelectBox from 'components/molecules/SelectBox/SelectBox'
import TextInput from 'components/molecules/TextInput/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import OrderSummaryWithProducts from '../OrderSummaryWithProducts/OrderSummaryWithProducts'

interface IFormValues {
  firstName: string
  lastName: string
  address: string
  city: string
  country: string
  postalcode: string
  phone: string
}

const initialValues: IFormValues = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: '',
  postalcode: '',
  phone: '',
}

const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('City is required'),
  postalcode: Yup.string().required('City is required'),
  phone: Yup.string().required('City is required'),
})

export default function ShippingAddressForm() {
  const handleSubmit = (values: IFormValues) => {
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
                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <TextInput label="First name" name="firstName" type="text" placeholder="Enter name" />

                  <TextInput label="Last name" name="lastName" type="text" placeholder="Enter last name" />

                  <div className="sm:col-span-2">
                    <TextInput label="Address" name="address" type="text" placeholder="Enter address" />
                  </div>

                  <TextInput label="City" name="city" type="text" placeholder="Enter city" />

                  <SelectBox label="Country" name="country">
                    <option value="Poland">Poland</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </SelectBox>

                  <div className="space-y-6">
                    <TextInput label="Postal code" name="postalcode" type="text" placeholder="Enter postal code" />
                    <TextInput label="Phone" name="phone" type="text" placeholder="Enter phone" />
                  </div>
                </div>

                <button type="submit">Click</button>
              </div>

              <OrderSummaryWithProducts />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
