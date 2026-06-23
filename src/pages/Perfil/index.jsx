import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import ProductCard from '../../components/ProductCard'
import ProductModal from '../../components/ProductModal'
import products from '../../data/products'
import restaurants from '../../data/restaurants'
import {
  Banner,
  BannerContent,
  Category,
  Title,
  ProductsSection,
  ProductsList
} from './styles'

function Perfil({ cartItems, addToCart }) {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const restaurant =
    restaurants.find((item) => item.id === Number(id)) || restaurants[1]

  const openModal = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <>
      <HeaderBar cartItems={cartItems} />

      <Banner style={{ backgroundImage: `url(${restaurant.hero})` }}>
        <div className="container">
          <BannerContent>
            <Category>{restaurant.tipo}</Category>
            <Title>{restaurant.titulo}</Title>
          </BannerContent>
        </div>
      </Banner>

      <ProductsSection>
        <div className="container">
          <ProductsList>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                openModal={openModal}
              />
            ))}
          </ProductsList>
        </div>
      </ProductsSection>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </>
  )
}

export default Perfil