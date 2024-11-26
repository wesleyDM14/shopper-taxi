import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: '#FFF',
        secondary: '#6C757D',
        theme: '#BE185D',
        light: '#F3F4F6',
        dark: '#1F2937',
        sucess: '#28A745',
        error: '#DC3545',
        warning: '#FFC107',
    },
    fontsSizes: {
        small: '12px',
        medium: '18px',
        large: '26px',
    },
};

type ThemeProps = {
    children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}