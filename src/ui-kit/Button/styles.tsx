import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: max-content;
  height: 46px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.typography.desktop.text2SemiBold.fontSize};
  font-weight: ${({ theme }) => theme.typography.desktop.text2SemiBold.fontWeight};
  color: ${({ theme }) => theme.colors.gray06};
  background-color: ${({ theme }) => theme.colors.gray01};
  line-height: 21.86px;
  border: none;
  border-radius: 50px;
  padding: 12px 42px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray05};
    color: ${({ theme }) => theme.colors.gray02};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.mobile.text2SemiBold.fontSize};
    height: 44px;
    line-height: 19.12px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray01};
      color: ${({ theme }) => theme.colors.gray06};
    }
  }
`;
