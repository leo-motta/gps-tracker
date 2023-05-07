import Map from "../Map";

export default function MapComponent({ positions }: any) {
    return (
        <div className="map">
            <Map width={"100%"} height={"100%"} positions={positions} />
        </div>
    );
}