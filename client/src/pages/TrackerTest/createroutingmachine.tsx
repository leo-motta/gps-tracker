import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = (props: any) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(-20.175742, -40.193036),
      L.latLng(-20.202192, -40.219772)
    ]
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;