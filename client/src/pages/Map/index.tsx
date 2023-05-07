import { TileLayer, MapContainer, Marker, Popup, useMap } from "react-leaflet";
import RoutingMachine from "./routingMachine";
import L from "leaflet";
import { useEffect, useState } from "react";

export default function Map({ width, height, positions, showPath}: any) {

    function RecenterAutomatically(props: any | null) {
        const map = useMap();
        useEffect(() => {
            map.setView([props.lat, props.lng], 30);
        }, [props.lat, props.lng]);
        return null;
    }

    const carIcon = new L.Icon({
        iconUrl: 'https://www.nicepng.com/png/full/54-544278_car-png-top-transparent-car-top-car-top.png',
        iconSize: [80, 40],
        iconAnchor: [40, 30],
        popupAnchor: [0, -41],
        shadowSize: [50, 64],
        shadowAnchor: [4, 62],
    });

    return (
        <MapContainer
            center={[0, 0]}
            zoom={5}
            scrollWheelZoom={true}
            style={{ minHeight: height, minWidth: width }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            { positions[positions.length-1] ?
            <>
                <RoutingMachine key={positions} coords={positions}/>
                <Marker position={positions[positions.length-1]} icon={carIcon}>
                    <Popup>
                        Lat: {positions[positions.length-1].lat} <br />
                        Lng: {positions[positions.length-1].lng}
                    </Popup>
                </Marker>
                <RecenterAutomatically lat={positions[positions.length-1].lat} lng={positions[positions.length-1].lng} />
            </> : <></>
            }
</MapContainer>
);
}