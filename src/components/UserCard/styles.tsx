import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 360px;
  width: 100%;
  height: 168px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray06};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    max-width: 162px;
    width: 100%;
    height: 242px;
    padding: 16px;
  }
`;

export const Avatar = styled.img<{ isArchived?: boolean }>`
  width: 112px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  filter: ${({ isArchived }) => (isArchived ? 'grayscale(1)' : 'grayscale(0)')};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 180px;
  width: 100%;
  height: 100%;

  h2 {
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 130px;
    width: 100%;
    height: 74px;
  }
`;

export const Username = styled.div<{ isArchived?: boolean }>`
  margin-bottom: 4px;
  color: ${({ isArchived, theme }) => (isArchived ? theme.colors.gray02 : theme.colors.accent)};
`;

export const Company = styled.div<{ isArchived?: boolean }>`
  color: ${({ isArchived, theme }) => (isArchived ? theme.colors.gray03 : theme.colors.gray02)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 120px;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const City = styled.div<{ isArchived?: boolean }>`
  color: ${({ isArchived, theme }) => (isArchived ? theme.colors.gray04 : theme.colors.gray03)};
`;

export const DropdowBtn = styled.button<{ isOpen: boolean }>`
  position: absolute;
  right: 24px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    g path {
      fill: ${({ isOpen, theme }) => (isOpen ? theme.colors.gray02 : theme.colors.gray01)};
    }
  }

  &:hover {
    svg {
      g path {
        fill: ${({ isOpen, theme }) => (isOpen ? theme.colors.gray02 : theme.colors.accent)};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    svg {
      width: 15px;
      height: 15px;
    }

    &:hover {
      svg {
        g path {
          fill: ${({ isOpen, theme }) => (isOpen ? theme.colors.gray02 : theme.colors.gray01)};
        }
      }
    }
  }
`;
