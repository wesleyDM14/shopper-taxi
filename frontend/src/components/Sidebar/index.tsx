import { FaHistory, FaTimes } from "react-icons/fa";
import { CloseContainer, MenuContainer, MenuItemContainer, MenuItemTitle, MenuTitleSection, } from "./sidebar.styles"
import React from "react";
import { SidebarProps } from "../../Types/indes";

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, closeSidebar, navigate }) => {
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <MenuContainer>
                <CloseContainer>
                    <FaTimes onClick={() => closeSidebar()} aria-hidden={true} />
                </CloseContainer>
            </MenuContainer>
            <MenuTitleSection>USUÁRIO</MenuTitleSection>
            <MenuItemContainer>
                <FaHistory />
                <MenuItemTitle onClick={() => navigate('/history')}>Histórico de Rotas</MenuItemTitle>
            </MenuItemContainer>
        </div>
    )
}

export default Sidebar;