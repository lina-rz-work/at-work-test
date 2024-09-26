import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 200px;

  h1 {
    color: ${({ theme }) => theme.colors.gray01}
  }
`;

export const UserList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const ArchivedSection = styled.div`
  margin-top: 40px;
`;

export const ArchivedTitle = styled.h2`
  color: #333;
`;

export const ErrorText = styled.p`
  color: red;
  margin: 20px 0;
`;

