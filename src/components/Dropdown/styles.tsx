import styled from "styled-components";

export const Actions = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 200px;
  width: 100%;
  top: 50px;
  right: 24px;
  background-color: ${({ theme }) => theme.colors.gray06};
  box-shadow: 0px 0px 2px 0px rgba(90, 90, 90, 1);
  border-radius: 12px;
  padding: 8px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 160px;
    width: 100%;
    max-height: 137px;
    top: 180px;
    right: 0;
  }
`;

export const Button = styled.button<{ archived?: boolean }>`
  display: flex;
  align-items: center;
  height: 38px;
  max-width: 184px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray01};
  border: none;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:hover {
      color: ${({ theme }) => theme.colors.gray01};
    }
  }
`;
