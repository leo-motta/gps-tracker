import { Container, Title } from "./styles";
import { TileLayer, MapContainer } from "react-leaflet";
import RoutingMachine from "./createroutingmachine";

export default function Tracker() {

    return(
        <Container>
            <Title>Welcome to Map Routes</Title>

            <MapContainer 
            center={[-20.175742, -40.193036]} 
            zoom={5} 
            scrollWheelZoom={true} 
            style={{ minHeight: "80vh", minWidth: "80vw" }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <RoutingMachine />
            </MapContainer>
        </Container>
    )
}