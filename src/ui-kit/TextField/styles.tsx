import styled from "styled-components";

export const FormFieldStyled = styled.div`
  position: relative;
  max-width: 420px;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;

  .cross_icon {
    display: none;
    position: absolute;
    right: 15px;
    top: 52px;
    cursor: pointer;
    width: 8.5px;
    height: 8.5px;
  }

  input:focus + .cross_icon {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 70px;
  }
`;

export const FormLabel = styled.label`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray01};
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  height: 42px;
  padding: 0px 8px 0px 16px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.gray04};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.typography.desktop.text2Medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.desktop.text2Medium.fontWeight};
  color: ${({ theme }) => theme.colors.gray02};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray04};
    box-shadow: none;

    .cross_icon {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.mobile.text2Medium.fontSize};
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  bottom: -20px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;


