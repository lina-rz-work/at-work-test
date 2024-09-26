import styled from "styled-components";

interface SryledCategoryProps {
  isActive: boolean;
}

export const StyledCategory = styled.li<SryledCategoryProps>`
  box-sizing: border-box;
  max-width: 280px;
  width: 100%;
  height: 34px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray04};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.gray01 : theme.colors.gray04)};
  cursor: pointer;
  
  p {
    font-weight: ${({ isActive, theme }) => (isActive && theme.typography.desktop.text2SemiBold.fontWeight)};
  }

  &:hover {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.gray01 : theme.colors.accent)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 27px;

    &:hover {
      color: ${({ theme }) => theme.colors.gray04};
    }
  }
`;

