// styles.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray06};
  padding: 40px;
  border-radius: 16px;
  max-width: 310px;
  width: 100%;
  height: 211px;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.gray02};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
