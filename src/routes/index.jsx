import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

function AppRoutes({ cartItems, addToCart }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/perfil/:id"
          element={<Perfil cartItems={cartItems} addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes