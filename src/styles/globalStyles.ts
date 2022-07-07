import { createGlobalStyle } from 'styled-components';

// 기본 스타일 입니다.
//reset.css
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('../fonts/SpoqaHanSansNeo-Thin.otf') format('opentype'),
        url('../fonts/SpoqaHanSansNeo-Thin.ttf') format('truetype');
    font-weight: 100;
    font-display: swap;

  } @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('../fonts/SpoqaHanSansNeo-Light.otf') format('opentype');
    url('../fonts/SpoqaHanSansNeo-Light.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('../fonts/SpoqaHanSansNeo-Regular.otf') format('opentype');
    url('../fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;

  } @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('../fonts/SpoqaHanSansNeo-Medium.otf') format('opentype');
    url('../fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    src: url('../fonts/SpoqaHanSansNeo-Bold.otf') format('opentype');
    url('../fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;

  }
  * {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    margin: 0;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    font-size: 10px;
  }
  body{
    background-color: #242424;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
export default GlobalStyles;
