import styled from 'styled-components'

export const Card = styled.div`
  width: 472px;
  border: 1px solid #e66767;
  background-color: #fff8f2;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
`;

export const Content = styled.div`
  padding: 8px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`;

export const Rating = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: #e66767;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 12px;
`;