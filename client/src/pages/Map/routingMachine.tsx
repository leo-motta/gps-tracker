import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = ({coords}: any) => {
  const instance = L.Routing.control({
    waypoints: coords,
    lineOptions: {
      styles: [{ color: 'red', weight: 4 }],
      extendToWaypoints: true,
      missingRouteTolerance:0
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    waypointMode: 'connect',
    createMarker: function() { return null; }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;