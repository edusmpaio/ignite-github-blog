import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-200']};
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  }
`
