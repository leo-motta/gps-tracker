export default function MenuComponent({ speed, distance, timestamp, dispatch }: any) {

    function timestampToString(timestamp: number) {
        // Convert the difference to seconds, minutes, and hours
        const seconds = Math.floor(timestamp / 1000) % 60;
        const minutes = Math.floor(timestamp / (1000 * 60)) % 60;
        const hours = Math.floor(timestamp / (1000 * 60 * 60));

        // Format the result as a string
        const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        return result;
    }

    function handleCheckboxClick() {
        dispatch({type: 'set_showpath'})
    }

    return (
        <div className="menu">

            <div className="menu-row">
                <div>
                    <img src="./icons/car2.png" className="menu-icon" alt="icon" />
                </div>
                <div>
                    <select className="select-option" id="select-car" name="select-car">
                        {/*<option value="opcao1">VOLKSWAGEN SAVEIRO 1.6 MSI TRENDLINE CS 8V FLEX 2P MANUAL</option>*/}
                        <option value="opcao1">2016 MERCEDES-BENZ AMG GT 4.0 V8 TURBO GASOLINA S 7G-DCT</option>
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
            </div>

            <div className="menu-row">
                <div>
                    <img src="./icons/route2.png" className="menu-icon" alt="icon" />
                </div>
                <div>
                    <select className="select-option" id="select-route" name="select-route">
                        <option value="opcao1">Sat, 03 Jun 2023 12:00:00 GMT</option>
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
                        <input className="toggle-checkbox" type="checkbox" onClick={handleCheckboxClick} checked/>
                        <div className="toggle-switch"></div>
                        <span className="toggle-label">Mostrar trajeto</span>
                    </label>
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
                    <div>Velocidade</div>
                    <div>{speed ? speed.toFixed(2) : 0} km/h</div>
                </div>

                <div>
                    <img src="./icons/control-panel2.png" className="menu-icon" alt="icon" />
                </div>
                <div className="menu-info unselectable">
                    <div>Distância</div>
                    <div>{distance ? distance.toFixed(2) : 0} km</div>
                </div>

                <div>
                    <img src="./icons/time2.png" className="menu-icon" alt="icon" />
                </div>
                <div className="menu-info unselectable">
                    <div>Tempo</div>
                    <div>{timestamp ? timestampToString(timestamp) : '00:00:00'}</div>
                </div>

                <div>
                    <img src="./icons/gas.png" className="menu-icon" alt="icon" />
                </div>
                <div className="menu-info unselectable">
                    <div>Consumo est.</div>
                    <div>0.34 L</div>
                </div>

                <div>
                    <img src="./icons/time-machine2.png" className="menu-icon" alt="icon" />
                </div>
                <div className="menu-info unselectable">
                    <div>Tempo estimado</div>
                    <div>00:05:35</div>
                </div>
            </div>

        </div>
    );
}