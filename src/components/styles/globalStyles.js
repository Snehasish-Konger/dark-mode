import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
    background-color: ${props => (props.mode === 'light' ? 'white' : 'black')};
    color: ${props => (props.mode === 'light' ? 'black' : 'white')};
    background-image: ${props => (props.mode === 'light' ? 'url(/light-bg.jpg)' : 'url(/dark-bg.jpg)')};
    background-size: cover;
  }
`;

export default GlobalStyles;
