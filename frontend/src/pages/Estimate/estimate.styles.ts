import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media only screen and (max-width: 978px) {
        padding: 0 10px;
    }
`;

export const MainHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    @media only screen and (max-width: 978px) {
        margin-bottom: 20px;
    }    
`;

export const HeaderTitle = styled.h1`
    font-size: ${props => props.theme.fontsSizes.large};
    color: ${props => props.theme.colors.theme};
    font-weight: 700;

    @media only screen and (max-width: 978px) {
        font-size: ${props => props.theme.fontsSizes.medium};
    }
`;

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr ;

    @media only screen and (max-width: 978px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledFormArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #fff;
    height: 80vh;

    @media only screen and (max-width: 978px) {
        padding: 20px 10px;
    }
`;

export const FormInputArea = styled.div`
    box-sizing: inherit;
    margin-bottom: 20px;

    @media only screen and (max-width: 978px) {
       margin-bottom: 10px;
    }
`;

export const FormInputLabelRequired = styled.div`
    font-weight: 600;
    margin-bottom: 5px;

    &::after {
        display: inline-block;
        content: "*";
        margin-left: 2px;
        color: ${props => props.theme.colors.theme};
    }

    @media only screen and (max-width: 978px) {
        font-size: ${props => props.theme.fontsSizes.small};
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 35px;
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${porps => porps.theme.colors.primary};
    border-radius: 4px;
    padding: 8px 12px;
    min-height: 40px;
    width: 100%;
    transition: all .2s ease-out;
    background-color: ${props => props.theme.colors.dark};

    &:hover{
        background-color: #0F05;
        color: #000A;
    }

    @media only screen and (max-width: 978px) {
        min-height: 30px;
        min-width: 60px;
        font-size: ${props => props.theme.fontsSizes.small};
    }
`;

export const ApiErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;

export const ApiErrorIconContainer = styled.div`
    display: flex;

    svg{
        font-size: 80px;
        color: ${props => props.theme.colors.error}
    }

    @media only screen and (max-width: 978px) {
        svg{
            font-size: 50px;
        }
    }
`;

export const ApiErrorTitle = styled.h4`
    font-size: ${props => props.theme.fontsSizes.medium};
    
    @media only screen and (max-width: 978px) {
        font-size: ${props => props.theme.fontsSizes.small};
    }
`;

export const MapMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 978px) {
        margin-top: 10px;
    }
`;

export const MapMainContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MapContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

    @media only screen and (max-width: 978px) {
        margin: 15px 0;
    }
`;

export const DriversOptionsContainer = styled.div``;

export const DriversOptionsTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const DriverOptionsTitle = styled.h4``;

export const DriverOptionsCardContainer = styled.div``;

export const DriverOptionsCardItem = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #fff;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 978px) {
        padding: 20px 10px;
    }
`;

export const DriverOptionName = styled.h5`
    font-size: 20px;
`;

export const DriverOptionValue = styled.p`
    font-size: ${props => props.theme.fontsSizes.small};
`;

export const DriverOptionButton = styled.button``;

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ResumeValueArea = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-right: 15px;
`;

export const ResumeValueIcon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;

     svg {
        font-size: 25px;
        color: #000;
     }
`;

export const ResumeTextArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResumeLabel = styled.p`
    font-size: 12px;
    font-weight: 600;
`;

export const ResumeValueText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #000;
`;