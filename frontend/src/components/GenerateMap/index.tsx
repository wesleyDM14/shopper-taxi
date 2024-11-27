import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { RouteData } from '../../Types/indes';
import { decodePolyline } from '../../functions';
import { ApiErrorContainer, ApiErrorIconContainer, ApiErrorTitle } from '../../pages/Estimate/estimate.styles';
import { TbApiOff } from 'react-icons/tb';

const GenerateMap: React.FC<{ routeData: RouteData }> = ({ routeData }) => {

    const apiKey = process.env.GOOGLE_APY_KEY || "AIzaSyC1Ju4-uM9T2w5TvPhL2Wue3XWXKFrvOh8";

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [polyline, setPolyline] = useState<google.maps.Polyline | null>(null);

    const mapRef = useRef(null);

    const markersRef = useRef<google.maps.Marker[]>([]);

    useEffect(() => {
        if (map && routeData) {

            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];

            const originMarker = new google.maps.Marker({
                position: { lat: routeData.origin.latitude, lng: routeData.origin.longitude },
                map: map,
                label: "A",
                title: "Origem",

            });
            markersRef.current.push(originMarker);

            const destinationMarker = new google.maps.Marker({
                position: { lat: routeData.destination.latitude, lng: routeData.destination.longitude },
                map: map,
                label: "B",
                title: "Destino",
            });
            markersRef.current.push(destinationMarker);

            const bounds = new google.maps.LatLngBounds();
            bounds.extend(originMarker.getPosition()!);
            bounds.extend(destinationMarker.getPosition()!);

            map.fitBounds(bounds);

            if (polyline) {
                polyline.setMap(null);
            }

            const newPolyline = new window.google.maps.Polyline({
                path: decodePolyline(routeData.routeResponse.routes[0].overview_polyline.points),
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 5,
            });

            newPolyline.setMap(map);

            setPolyline(newPolyline);
        }
    }, [map, routeData]);

    if (!apiKey) {
        return (
            <ApiErrorContainer>
                <ApiErrorIconContainer>
                    <TbApiOff />
                </ApiErrorIconContainer>
                <ApiErrorTitle>Chave da API do Google Maps não Configurada.</ApiErrorTitle>
            </ApiErrorContainer>
        )
    }

    if (!isLoaded) return <div>Carregando mapa...</div>;

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMap
                ref={mapRef}
                mapContainerStyle={{ height: '87vh', width: '100%' }}
                center={{
                    lat: (routeData.origin.latitude + routeData.destination.latitude) / 2,
                    lng: (routeData.origin.longitude + routeData.destination.longitude) / 2,
                }}
                zoom={10}
                onLoad={(mapInstance) => setMap(mapInstance)}
            >
            </GoogleMap>
        </div>
    );
};

export default GenerateMap;
