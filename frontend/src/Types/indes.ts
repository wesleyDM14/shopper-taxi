import React from "react";

export interface EstimateRideFormValues {
    customer_id: string,
    origin: string,
    destination: string;
}

export interface Review {
    rating: number;
    comment: string;
}

export interface DriverOption {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: Review;
    value: number;
}

export interface OriginAndDestinationData {
    latitude: number;
    longitude: number;
}

export interface Route {
    overview_polyline: {
        points: string;
    }
}

export interface RouteResponse {
    routes: Route[];
}

export interface RouteData {
    origin: OriginAndDestinationData;
    destination: OriginAndDestinationData;
    distance: number;
    duration: string;
    options: DriverOption[];
    routeResponse: RouteResponse;
}

export interface MainLayoutProps {
    children: React.ReactNode;
}

export interface NavbarProps {
    openSidebar: () => void;
    navigate: (path: string) => void;
}

export interface SidebarProps {
    sidebarOpen: boolean;
    closeSidebar: () => void;
    navigate: (path: string) => void;
}

export interface EstimateProps {
    navigate: (path: string) => void;
}