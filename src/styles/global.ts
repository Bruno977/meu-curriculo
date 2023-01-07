import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.green500};
  }
  body {
   background-color: ${(props) => props.theme.colors.gray900};
   color: ${(props) => props.theme.colors.gray300};
   -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.textBase};
  }
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray300}
  }
  ul{
    list-style: none;
  }
  .container{
    max-width: ${(props) => props.theme.container.xl};
    margin: 0 auto;
    padding: 0 1.25rem;
  }
  h1{
    font-size: ${(props) => props.theme.fontSizes.text2xl};
        color: ${(props) => props.theme.colors.white};
  }
  input {
        flex: 1;
        height: 2.75rem;
        padding: 1.25rem;
        background-color: ${(props) => props.theme.colors.gray800};
        border: 2px solid ${(props) => props.theme.colors.gray800};
        border-radius: ${(props) => props.theme.borderRadius.roundedMd};
        color: ${(props) => props.theme.colors.white};

        transition: ${(props) => props.theme.transitions.all};
    }

    .privacy-screen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => props.theme.colors.gray800};
      z-index: 2;
    }
    .overflow-home-top,
    .overflow-home-bottom{
      position: fixed;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: ${(props) => props.theme.colors.gray800};
    }
    .overflow-home-top{
      top: 0;
    }
    .overflow-home-bottom{
      bottom: 0;
    }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.text4xl};
  padding: 1.25rem 0;

  strong {
    color: ${(props) => props.theme.colors.green500};
  }
`;
