import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
    }

    body {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        background: ${props => props.theme.colors.light};
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #a5aaad;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #3ea175;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #a5aaad;
    }

    @media only screen and (max-width: 978px) {
        
    }
`;
