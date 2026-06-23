import { useState } from 'react'
import AppRoutes from './routes'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [cartItems, setCartItems] = useState(0)

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <>
      <GlobalStyles />
      <AppRoutes cartItems={cartItems} addToCart={addToCart} />
    </>
  )
}

export default App