import styled from 'styled-components'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
  }
`

export const BannerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;
`

export const Category = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
`

export const ProductsSection = styled.section`
  padding: 56px 0 120px;
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  justify-content: space-between;
  row-gap: 32px;
`