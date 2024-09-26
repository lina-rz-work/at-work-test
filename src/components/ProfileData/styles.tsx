import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 760px;
  width: 100%;
  height: 813px;
  padding: 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray06};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 343px;
    width: 100%;
    height: 737px;
    padding: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 420px;
  width: 100%;
  height: 660px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: fit-content;

    button {
      width: 100%;
    }
  }
`;
