import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 260px;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

