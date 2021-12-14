import {createGlobalStyle} from "styled-components";

const StyledGlobal = createGlobalStyle`
    /* montserrat-100 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 100;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-200 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 200;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-300 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-regular - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-500 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-600 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-700 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-800 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-900 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      src: local(''),
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/montserrat/montserrat-v18-latin_cyrillic-ext_cyrillic-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }   
    
    /* open-sans-300 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 300;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-regular - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-500 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 500;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-600 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-700 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-800 - latin_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 800;
      src: local(''),
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/open-sans/open-sans-v27-latin_cyrillic-ext_cyrillic-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }


    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
      padding-bottom: 108px;
      font-family: "Open Sans", Arial;
      -webkit-overflow-scrolling: auto;
      overflow-y: scroll;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: "Montserrat", Arial;
    }

    ul,
    ol {
      padding: 0;
      list-style: none;
    }
`;

export default StyledGlobal;