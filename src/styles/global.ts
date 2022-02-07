import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F6F6F6; // #f0f0f5
        --shape: #ffffff;

        --red: #e52e4d;
        --blue: #4682b4;

        --blue-light: #57a0d3;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Default font-size: 16px
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // font-size: 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // font-size: 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: var(--text-title);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button: {
        cursor: pointer;
    }

    input:focus, textarea:focus, select:focus {
        outline-offset: 0px !important;
        outline: none !important;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
