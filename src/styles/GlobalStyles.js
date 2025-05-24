import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Dark Theme Colors */
    --background-dark: #11001f;
    --card-bg-dark: #1a0033;
    --text-dark: #f8fafc;
    --primary-dark: #8b5cf6;
    --secondary-dark: #7c3aed;
    --accent-dark: #f472b6;
    
    /* Light Theme Colors */
    --background-light: #ffffff;
    --card-bg-light: #f8fafc;
    --text-light: #1e293b;
    --primary-light: #6366f1;
    --secondary-light: #4f46e5;
    --accent-light: #ec4899;
    
    /* Common */
    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --border-radius: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    transition: var(--transition);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-dark);
  }
`;

export default GlobalStyles;