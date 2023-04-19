import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from 'leaflet';

export default function Routing() {
    const map = useMap();
  
    useEffect(() => {
      if (!map) return;
  
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(-20.175742, -40.193036), L.latLng(-20.202192, -40.219772)],
        routeWhileDragging: true
      }).addTo(map);
  
      //map.removeControl(routingControl);
    }, [map]);
  
    return null;
  }