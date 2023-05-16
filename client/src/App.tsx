//import React, { useRef} from 'react';
import Home from './pages/Home';
import "leaflet/dist/leaflet.css";
import "./styles.css";
import "./reset.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer } from 'react';
import reducer from './reducer';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './privateRoute';

function App() {
  //const windowWidthSize = useRef<number>(window.innerWiddth);
  const [state, dispatch] = useReducer<any>(reducer,{ positions: [], speed: 0, distance: 0, timestamp: 0, showPath: false });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login dispatch={dispatch}/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={
          <PrivateRoute state={state}>
            <Home state={state} dispatch={dispatch}/>
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;