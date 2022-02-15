import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import { Routes, Route } from 'react-router-dom'
import CartScreen from 'views/CartScreen/CartScreen'
import HomeScreen from 'views/HomeScreen/HomeScreen'
import RegisterScreen from 'views/RegisterScreen/RegisterScreen'
import SigninScreen from 'views/SigninScreen/SigninScreen'
import ProductScreen from 'views/ProductScreen/ProductScreen'

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
      </Routes>
    </MainTemplate>
  )
}

export default Root
