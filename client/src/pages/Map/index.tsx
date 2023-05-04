import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import RoutingMachine from "./routingMachine";
import L from "leaflet";

export default function Map({width, height}: any) {
    const centerPos: L.LatLngExpression = [-20.175742, -40.193036];

    const coords: L.LatLng[] = [
        L.latLng(-20.175742, -40.193036),
        L.latLng(-20.202192, -40.219772)
    ];

    const route: L.LatLng[] = [
        L.latLng(-20.203143, -40.219237),
        L.latLng(-20.203977, -40.220479),
        L.latLng(-20.205148, -40.223632),
        L.latLng(-20.205822, -40.231214)
    ];

    const lastPos = route[route.length-1];

    const carIcon = new L.Icon({
        iconUrl: 'https://www.nicepng.com/png/full/54-544278_car-png-top-transparent-car-top-car-top.png',
        iconSize: [80, 40],
        iconAnchor: [40, 30],
        popupAnchor: [0, -41],
        shadowSize:   [50, 64],
        shadowAnchor: [4, 62],
    });

    return(
        <MapContainer 
        center={centerPos} 
        zoom={5} 
        scrollWheelZoom={true} 
        style={{ minHeight: height, minWidth: width }}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <RoutingMachine coords={route}/>
            <Marker position={lastPos} icon={carIcon}>
                <Popup>
                    Car Info
                </Popup>
            </Marker>
        </MapContainer>
    );
}