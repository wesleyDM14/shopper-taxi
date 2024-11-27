import styled from "styled-components";

export const CloseContainer = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.error};
    display: none;

    @media only screen and (max-width: 978px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content:right;
    align-items: center;
`;

export const MenuTitleSection = styled.h3`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontsSizes.medium};
    font-weight: 700;
`;

export const MenuItemContainer = styled.div`
    color: #FFF;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        background: rgba(62, 161, 117, 0.3);
        border-radius: 3px;
    }

    @media only screen and (max-width: 978px) {
        font-size: 16px;
    }
`;

export const MenuItemTitle = styled.a`
    text-decoration: none;
    color: #FFF;
    font-weight: 700;
    font-size: 16px;
    margin-left: 15px;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
        margin-left: 20px;
    }

    @media only screen and (max-width: 978px) {
        font-size: 14px;
    }
`;

