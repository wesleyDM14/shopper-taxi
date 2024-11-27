import styled from "styled-components";

export const NavbarContainer = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    grid-area: nav;
    height: 80px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 30px;
    border-bottom: 1px solid ${props => props.theme.colors.sucess};
`;

export const NavbarLogo = styled.img`
    width: 150px;
    height: 70px;
    cursor: pointer;
`;

export const NavbarShowIconContainer = styled.div`
    margin-right: 15px;
    display: none;
    svg {
        font-size: 18px;
    }

    @media only screen and (max-width: 978px) {
        display: inline;
    }
`;
