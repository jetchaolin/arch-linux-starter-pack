import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  text-align: center;
  --primary-color: #d7e144;
  --secondary-color: #E7E7E7;
  --background-color: #192647;
  --text-color: #ffffff;
  --font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  height: 100vh;
  margin: 0;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family);
}
* {
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}


button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

    `;

export default GlobalStyles;
