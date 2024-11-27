import React from "react";
import { NavbarContainer, NavbarLogo, NavbarShowIconContainer } from "./navbar.styles";
import { FaBars } from 'react-icons/fa';

import logo from '../../assets/SHOPPER TAXI.png';
import { NavbarProps } from "../../Types/indes";

const Navbar: React.FC<NavbarProps> = ({ openSidebar, navigate }) => {

    return (
        <NavbarContainer>
            <NavbarShowIconContainer onClick={() => openSidebar()}>
                <FaBars />
            </NavbarShowIconContainer>
            <NavbarLogo src={logo} alt="Logo" onClick={() => navigate('/')} />
        </NavbarContainer>
    );
}

export default Navbar;