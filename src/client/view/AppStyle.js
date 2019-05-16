import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Arial';
  }

  *:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    background-color: transparent;
  }

  textarea {
    resize: none;
    border: none;
  }

  button {
    border: none;
    background-color: transparent;
    padding: unset;
    cursor: pointer;
  }
`;

export default AppStyle;