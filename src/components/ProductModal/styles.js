import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 160px;
  z-index: 999;
`

export const ModalContainer = styled.div`
  width: 1024px;
  min-height: 344px;
  background-color: #e66767;
  padding: 32px;
  position: relative;
  display: flex;
  gap: 24px;
  color: #ffebd9;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #ffebd9;
  font-size: 18px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`

export const Portion = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  width: fit-content;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`