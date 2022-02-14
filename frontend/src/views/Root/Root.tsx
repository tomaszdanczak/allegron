import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import { Routes, Route } from 'react-router-dom'
import CartScreen from 'views/CartScreen/CartScreen'
import HomeScreen from 'views/HomeScreen/HomeScreen'
import RegisterScreen from 'views/RegisterScreen/RegisterScreen'
import SigninScreen from 'views/SigninScreen/SigninScreen'

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </MainTemplate>
  )
}

export default Root
