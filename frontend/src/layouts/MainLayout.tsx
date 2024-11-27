import React, { useState } from "react"
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { MainLayoutProps } from "../Types/indes";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="main-container">
            <Navbar navigate={navigate} openSidebar={openSidebar} />
            <main>
                {React.cloneElement(children as React.ReactElement, { navigate })}
            </main>
            <Sidebar navigate={navigate} sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}

export default MainLayout;