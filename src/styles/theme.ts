export const theme = {
  colors: {
    gray06: '#FDFDFD',
    gray05: '#F4F4F4',
    gray04: '#DADADA',
    gray03: '#9C9C9C',
    gray02: '#595959',
    gray01: '#161616',
    accent: '#22A0BC',
  },
  typography: {
    desktop: {
      title: { fontSize: '24px', fontWeight: 600 },
      headline: { fontSize: '20px', fontWeight: 600 },
      text1SemiBold: { fontSize: '18px', fontWeight: 600 },
      text1Medium: { fontSize: '18px', fontWeight: 500 },
      text2SemiBold: { fontSize: '16px', fontWeight: 600 },
      text2Medium: { fontSize: '16px', fontWeight: 500 },
      caption: { fontSize: '14px', fontWeight: 400 },
    },
    mobile: {
      title: { fontSize: '24px', fontWeight: 600 },
      headline: { fontSize: '18px', fontWeight: 600 },
      text1SemiBold: { fontSize: '16px', fontWeight: 600 },
      text1Medium: { fontSize: '16px', fontWeight: 500 },
      text2SemiBold: { fontSize: '14px', fontWeight: 600 },
      text2Medium: { fontSize: '14px', fontWeight: 500 },
      caption: { fontSize: '10px', fontWeight: 600 },
    },
  },
  fonts: {
    main: 'Manrope, sans-serif',
  },
  devices: {
    mobile: '(max-width: 768px)',
    desktop: '(min-width: 769px)',
  },
  breakpoints: {
    mobile: '768px',
  },
};
