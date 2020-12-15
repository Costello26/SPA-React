import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
      html{
        box-sizing: border-box;
      }
      *, *::before, *::after{
        box-sizing: inherit;
      }
      body{
        margin: 0;
        padding: 0;
        font-family: 'Raleway' , sans-serif;
        font-size: 14px;
        color: #000;
      }
      .container{
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
      }
      a{
        color: inherit;
        text-decoration: none;
      }
      ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      h1, h2, h3{
        font-family: 'Bebas Neue', sans-serif;
        margin: 0;
        padding: 0px;
        letter-spacing: 1px;
      }
`;