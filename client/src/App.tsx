//import React, { useRef} from 'react';
import Main from './pages/Main';
import "leaflet/dist/leaflet.css";
import "./styles.css";
import "./reset.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react';
import reducer from './reducer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  //const windowWidthSize = useRef<number>(window.innerWiddth);
  const [state, dispatch] = useReducer<any>(reducer,{ positions: [], speed: 0, distance: 0, timestamp: 0, showPath: false });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={
          <Main state={state} dispatch={dispatch}/>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;