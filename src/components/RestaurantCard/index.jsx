import { Link } from 'react-router-dom'
import {
  Card,
  CardImage,
  Tags,
  Tag,
  Content,
  Top,
  Title,
  Rating,
  Description,
  Button
} from './styles'

function RestaurantCard({ restaurant }) {
  return (
    <Card>
      <CardImage src={restaurant.capa} alt={restaurant.titulo} />

      <Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </Tags>

      <Content>
        <Top>
          <Title>{restaurant.titulo}</Title>
          <Rating>{restaurant.nota} ★</Rating>
        </Top>

        <Description>{restaurant.descricao}</Description>

        <Link to={`/perfil/${restaurant.id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </Content>
    </Card>
  )
}

export default RestaurantCard