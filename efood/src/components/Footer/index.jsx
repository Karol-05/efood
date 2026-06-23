import { FooterArea, FooterLogo, Icons, Icon, Text } from './styles'

function Footer() {
  return (
    <FooterArea>
      <div className="container">
        <FooterLogo>efood</FooterLogo>

        <Icons>
          <Icon>◎</Icon>
          <Icon>●</Icon>
          <Icon>◉</Icon>
        </Icons>

        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </div>
    </FooterArea>
  )
}

export default Footer