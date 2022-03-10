import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
      ${"" /* Colors */}
        --black: #042423;
        --white: #F7CEB2;
        --primary: #A85533;
        --primaryContrast: #DAA18A;
        --secondary: #0A3E32;
        --gray: #9FB3C8;
        --darkGray: #486581;
        --darkGrey: var(--darkGray);
        --grey: var(--gray);
        --lightGray: #F0F4F8;
        --lightGrey: var(--lightGray);
        --red: #A61B1B;
        --redContrast: #FFEEEE;
        ${"" /* TextSizing */}
        font-size: 62.5%;
        --aa: 1rem;
        --a: 1.2rem;
        --b: 1.4rem;
        --c: 1.6rem;
        --d: 1.8rem;
        --e: 2rem;
        --f: 2.4rem;
        --g: 3rem;
        --h: 3.6rem;
        --i: 4.8rem;
        --j: 6rem;
        --k: 7.2rem;
        ${"" /* Box Shadows */}
        --bs: 0 1px 10px 5px rgba(217, 226, 236, 1);
        ${"" /* Radius */}
        --pageBorderRadius: 3rem;
        --radius: 0.5rem;
        ${"" /* Spacing */}
        --smallLineSpacing: 1rem;
        --normalLineSpacing: 3.6rem;
        --extraLineSpacing: 2rem;
        --xsSpacing: 0.8rem;
        --smSpacing: 1.2rem;
        --medSpacing: 1.6rem;
        --lgSpacing: 2rem;
        --xlSpacing: 2.4rem;
        --xxlSpacing: 3rem;
        --evenBiggerSpacing: 4.2rem;
        --hugeSpacing: 6rem;
        --smBtnSpacing: 1.2rem 2rem;
        --lgBtnSpacing: 1.6rem 3rem;
        ${"" /* Breakpoints */}
        --lgScreen: 1200px;
        --medScreen: 900px;
        --smScreen: 500px;
        --maxWidth: 1000px;
        --textLength: 800px;
        --mainContainerWidth: 1500px;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: var(--white);
    }
    *:focus {
        outline: none;
    }
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Fira Code', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 1.6rem;
        margin-left: auto;
        margin-right: auto;
        font-size: var(--normal);
        background-color: var(--black);
        // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23323232' fill-opacity='0.62'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: unset;
    }
    a {
        cursor: pointer;
    }
    a,
    a:visited,
    a:focus,
    a:hover {
        text-decoration: none;
        color: var(--primary);
        cursor: pointer;
    }
    ol, ul {
        list-style-type: none;
    }
    button {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: none;
    }
    input {
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
        box-shadow: none;
    }
    textarea {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
    }
    p {
      ${"" /* font-size: var(--medium); */}
      font-size: var(--normal);
      line-height: var(--normalLineSpacing);
      margin-bottom: var(--lgSpacing);
    }
    
    .lift {
       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .nav-desktop {
        display: none;
        @media screen and (min-width: 900px) {
            display: flex;
        }
    }
  .nav-mobile {
      ${
        "" /* @media screen and (min-width: var(--medScreen)) {
          display: none;
      } */
      }
      @media screen and (min-width: 900px) {
          display: none;
      }
  }
`;
