import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import { Routes, Route } from 'react-router-dom'
import CartScreen from 'views/CartScreen/CartScreen'
import HomeScreen from 'views/HomeScreen/HomeScreen'

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </MainTemplate>
  )
}

export default Root
