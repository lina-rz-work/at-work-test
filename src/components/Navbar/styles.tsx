import styled from 'styled-components';

export const StyledNavbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  max-height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.gray06};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 11px;
    height: 50px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
  margin: 0 auto;
`

export const Logo = styled.div`
  display: flex;
`

export const RegisteredMenu = styled.div`
  display: flex;
`

export const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  width: 93px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray02};
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: fit-content;
    margin-left: 0px;

    p {
      display: none;
    }
  }
`

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;