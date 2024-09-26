import styled from "styled-components";

export const SettingsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 360px;
  width: 100%;
  height: 813px;
  padding: 40px;
  border-radius: 16px;
  background-color: #FDFDFD;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 343px;
    width: 100%;
    height: 435px;
    padding: 28px;
  }
`

export const Avatar = styled.img`
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 187px;
    width: 287px;
    border-radius: 8px;
  }
`;

export const SettingsList = styled.ul`
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 287px;
    width: 100%;
    height: 168px;
  }
`;
