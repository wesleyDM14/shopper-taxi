import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 0 30px;
    margin-top: 15px;
    margin-bottom: 30px;

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
    display: flex;
    flex-direction: column;
`;

export const StyledFormArea = styled.div`
    padding: 30px 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #fff;

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
    flex-direction: row;
    justify-content: center;
    padding: 0 35px;
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 4px;
    padding: 8px 12px;
    min-height: 40px;
    min-width: 80px;
    transition: all .2s ease-out;
    background-color: ${props => props.theme.colors.primary};

    &:hover{
        background-color: #000A;
        color: #FFFA;
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
    height: 200px;
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

export const MapMainTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const MapTitle = styled.h4`
    font-size: ${props => props.theme.fontsSizes.medium};
`;

export const MapMainContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 978px) {
        display: flex;
        flex-direction: column;
    }
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

    @media only screen and (max-width: 978px) {
        padding: 20px 10px;
    }
`;

export const DriverOptionName = styled.h5``;

export const DriverOptionValue = styled.p`
    font-size: ${props => props.theme.fontsSizes.small};
`;

export const DriverOptionButton = styled.button``;