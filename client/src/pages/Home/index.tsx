import { useEffect, useReducer, useState } from "react";
import MapComponent from "./MapComponent";
import MenuComponent from "./MenuComponent";
import SidebarComponent from "./SidebarComponent";
import L from "leaflet";
import { io } from "socket.io-client";

export default function Home({ state, dispatch }: any) {
    const [positions, setPositions] = useState([]);
    const [speed, setSpeed] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);
    const [timestamp, setTimestamp] = useState<number>(0);
    const [showPath, setShowPath] = useState(false);

    useEffect(() => {
        const connectToSocketIO = () => {
            const socket = io('http://localhost:5000', {
                transports: ['websocket']
            });

            socket.on('connect', () => {
                console.log('Conectado ao servidor WebSocket');
            });

            socket.on('position_data', (data) => {
                dispatch({ type: 'add_position', payload: L.latLng(data.lat, data.lng) });
                dispatch({ type: 'set_speed', payload: data.speed});
                dispatch({ type: 'set_distance', payload: data.distance});
                dispatch( {type: 'add_time', payload: data.timestamp})
            });
        }

        if(state.user) {
            connectToSocketIO();
        }
    }, []);

    useEffect(() => {
        if (state.positions.length > 0) {
            setPositions(state.positions);
            setSpeed(state.speed);
            setDistance(state.distance);
            setTimestamp(state.timestamp);
            setShowPath(state.showpath);       
            console.log('showpath: ' + state.showpath);
        }
    }, [state]);

    return (
        <div className="container">
            <SidebarComponent />
            <div className="content">
                <MenuComponent speed={speed} distance={distance} timestamp={timestamp} dispatch={dispatch}/>
                <MapComponent positions={positions} showPath={showPath}/>
            </div>
        </div>
    );
}