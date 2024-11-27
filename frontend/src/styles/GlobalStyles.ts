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

    main{
        grid-area: main;
        padding: 15px;
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

    .main-container {
        display: grid;
        height: 100vh;
        width: 100%;
        grid-template-columns: 0.6fr repeat(3, 1fr);
        grid-template-rows: 0.2fr 3fr;
        grid-template-areas: 
            'sidebar nav nav nav'
            'sidebar main main main'
        ;

        @media only screen and (max-width: 978px) {
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 3fr;
            grid-template-areas: "nav" "main";
        }
    }

    .sidebar-responsive {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background: '#000';
        padding: 20px;
        z-index: 9999 !important;
        overflow-y: auto;
        display: flex !important;
        flex-direction: column;
    }

    .container-responsive {
        @media only screen and (max-width: 978px) {
            display: none;
        }
    }

    #sidebar {
        background: ${props => props.theme.colors.dark};
        grid-area: sidebar;
        overflow-y: hidden;
        padding: 20px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;

        @media only screen and (max-width: 978px){
            display: none;
        }
    }
`;
