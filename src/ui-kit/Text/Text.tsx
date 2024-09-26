// import styled from 'styled-components';

// interface TextProps {
//   variant: 'title' | 'headline' | 'text1SemiBold' | 'text1Medium' | 'text2SemiBold' | 'text2Medium' | 'caption';
//   device: 'mobile' | 'desktop';
//   children: React.ReactNode;
// }

// const TextStyled = styled.p<TextProps>`
//   font-size: ${({ theme, variant, device }) => theme.typography[device][variant].fontSize};
//   font-weight: ${({ theme, variant, device }) => theme.typography[device][variant].fontWeight};
// `;

// export const Text: React.FC<TextProps> = ({ variant, device, children }) => {
//   return <TextStyled variant={variant} device={device}>{children}</TextStyled>;
// };



import styled from 'styled-components';

interface TextProps {
  variant: 'title' | 'headline' | 'text1SemiBold' | 'text1Medium' | 'text2SemiBold' | 'text2Medium' | 'caption';
  // device: 'mobile' | 'desktop';
  children: React.ReactNode;
}

const variantTagMapping = {
  title: 'h1',
  headline: 'h2',
  text1SemiBold: 'p',
  text1Medium: 'p',
  text2SemiBold: 'p',
  text2Medium: 'p',
  caption: 'span',
};

const StyledText = styled(({ as: Component = 'p' }) => <Component />)<TextProps>`
  font-size: ${({ theme, variant }) => theme.typography.desktop[variant].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography.desktop[variant].fontWeight};
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme, variant }) => theme.typography.mobile[variant].fontSize};
    font-weight: ${({ theme, variant }) => theme.typography.mobile[variant].fontWeight};
  }
`;

export const Text: React.FC<TextProps> = ({ variant = 'text1Medium', children }) => {
  const Component = variantTagMapping[variant] || 'p';
  return (
    <StyledText as={Component} variant={variant}>
      {children}
    </StyledText>
  );
};

