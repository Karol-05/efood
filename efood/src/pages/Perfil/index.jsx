import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import ProductCard from '../../components/ProductCard'
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

  const restaurant =
    restaurants.find((item) => item.id === Number(id)) || restaurants[1]

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
                addToCart={addToCart}
              />
            ))}
          </ProductsList>
        </div>
      </ProductsSection>

      <Footer />
    </>
  )
}

export default Perfil