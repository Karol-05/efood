import styled, { css } from 'styled-components'

export const Bar = styled.div`
  background-color: #ffebd9;
`

export const Content = styled.div`
  min-height: 186px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 64px;
  position: relative;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(230, 103, 103, 0.08) 0px,
    rgba(230, 103, 103, 0.08) 2px,
    transparent 2px,
    transparent 18px
  );

  ${({ home }) =>
    !home &&
    css`
      min-height: 116px;
      padding-top: 40px;
      justify-content: space-between;
      align-items: center;
      background-image: none;
    `}
`

export const Logo = styled.div`
  border: 2px solid #e66767;
  color: #e66767;
  font-size: 38px;
  font-weight: 900;
  line-height: 1;
  padding: 6px 12px;
`

export const LeftText = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
`

export const RightText = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
`