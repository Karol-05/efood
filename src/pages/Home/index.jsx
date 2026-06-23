import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import RestaurantCard from '../../components/RestaurantCard'
import restaurants from '../../data/restaurants'
import { HeroText, ListSection, RestaurantList } from './styles'

function Home() {
  return (
    <>
      <HeaderBar home />

      <HeroText>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </HeroText>

      <ListSection>
        <div className="container">
          <RestaurantList>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantList>
        </div>
      </ListSection>

      <Footer />
    </>
  )
}

export default Home