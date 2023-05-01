import Map from "../Map";
import "./mobile.css"

export default function MainMobile() {
    return (
        <div className="containerMobile">

            <div className="content">

                <div className="map">
                    <Map width={"100%"} height={"100%"} />
                </div>

                <div className="menu">

                    <div className="menu-row">
                        <div>
                            <img src="./icons/car2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div>
                            <select className="select-option" id="select-car" name="select-car">
                                <option value="opcao1">VOLKSWAGEN SAVEIRO 1.6 MSI TRENDLINE CS 8V FLEX 2P MANUAL</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                                <option value="opcao4">Opção 4</option>
                            </select>
                        </div>
                        <div className="menu-button">
                            <button>✚</button>
                        </div>
                        <div className="menu-button">
                            <button>🞭</button>
                        </div>
                        <div className="unselectable">
                            <label className="toggle">
                                <input className="toggle-checkbox" type="checkbox" />
                                <div className="toggle-switch"></div>
                                <span className="toggle-label">Mostrar trajeto</span>
                            </label>
                        </div>
                    </div>

                    <div className="menu-row">
                        <div>
                            <img src="./icons/route2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div>
                            <select className="select-option" id="select-route" name="select-route">
                                <option value="opcao1">Fri, 02 Feb 1996 03:04:05 GMT</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                                <option value="opcao4">Opção 4</option>
                            </select>
                        </div>
                        <div className="menu-button">
                            <button>✚</button>
                        </div>
                        <div className="menu-button">
                            <button>🞭</button>
                        </div>
                        <div className="unselectable">
                            <label className="toggle">
                                <input className="toggle-checkbox" type="checkbox" />
                                <div className="toggle-switch"></div>
                                <span className="toggle-label">Mostrar rota</span>
                            </label>

                        </div>
                    </div>

                    <div className="menu-row">
                        <div>
                            <img src="./icons/control-panel2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div className="menu-info unselectable">
                            <div>Velocidade est.</div>
                            <div>50 km/h</div>
                        </div>

                        <div>
                            <img src="./icons/control-panel2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div className="menu-info unselectable">
                            <div>Quilometragem</div>
                            <div>30 km</div>
                        </div>

                        <div>
                            <img src="./icons/gas.png" className="menu-icon" alt="icon" />
                        </div>
                        <div className="menu-info unselectable">
                            <div>Consumo est.</div>
                            <div>12L</div>
                        </div>

                        <div>
                            <img src="./icons/time2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div className="menu-info unselectable">
                            <div>Tempo est.</div>
                            <div>03:02:23</div>
                        </div>

                        <div>
                            <img src="./icons/time-machine2.png" className="menu-icon" alt="icon" />
                        </div>
                        <div className="menu-info unselectable">
                            <div>Tempo de viagem</div>
                            <div>03:30:00</div>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <img src="./icons/HomeIcon.png" className="icon" alt="icon" />
                    <img src="./icons/OptionsIcon.png" className="icon" alt="icon" />
                    <img src="./icons/ExitIcon.png" className="icon" id="exit-icon" alt="icon" />
                </div>
            </div>
        </div>
    );
}