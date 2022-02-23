import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import { Routes, Route } from 'react-router-dom'
import CartScreen from 'views/CartScreen/CartScreen'
import HomeScreen from 'views/HomeScreen/HomeScreen'
import RegisterScreen from 'views/RegisterScreen/RegisterScreen'
import SigninScreen from 'views/SigninScreen/SigninScreen'
import ProductScreen from 'views/ProductScreen/ProductScreen'
import ShippingAddressScreen from 'views/ShippingAddressScreen/ShippingAddressScreen'
import PaymentMethodScreen from 'views/PaymentMethodScreen/PaymentMethodScreen'

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/:gender" element={<HomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />} />
      </Routes>
    </MainTemplate>
  )
}

export default Root
