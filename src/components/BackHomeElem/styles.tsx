import styled from 'styled-components';

export const BackElemStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 68px;
  padding: 20px 0;
  margin-bottom: 20px;
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray02};
  gap: 15px;
  cursor: pointer;
`;
