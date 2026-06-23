import { Link } from 'react-router-dom'
import { Bar, Content, LeftText, Logo, RightText } from './styles'

function HeaderBar({ home = false, cartItems = 0 }) {
  return (
    <Bar>
      <div className="container">
        <Content home={home}>
          {home ? (
            <Logo>efood</Logo>
          ) : (
            <>
              <LeftText>
                <Link to="/">Restaurantes</Link>
              </LeftText>
              <Logo>efood</Logo>
              <RightText>{cartItems} produto(s) no carrinho</RightText>
            </>
          )}
        </Content>
      </div>
    </Bar>
  )
}

export default HeaderBar