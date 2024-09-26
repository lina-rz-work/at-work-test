import styled from 'styled-components';

interface DivideLineProps {
  margin?: string;
  width?: string;
}

const DivideLineStyled = styled.hr<DivideLineProps>`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray04};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
`;

export const DivideLine: React.FC<DivideLineProps> = ({ margin, width }) => {
  return <DivideLineStyled margin={margin} width={width} />;
};
