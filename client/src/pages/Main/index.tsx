import MapComponent from "./MapComponent";
import MenuComponent from "./MenuComponent";
import SidebarComponent from "./SidebarComponent";
import "./main.css"

export default function Main() {
    return (
        <div className="container">
            <SidebarComponent/>
            <div className="content">
                <MenuComponent/>
                <MapComponent/>
            </div>
        </div>
    );
}