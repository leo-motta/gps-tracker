//import React, { useRef} from 'react';
import Main from './pages/Main';
import "leaflet/dist/leaflet.css";
import "./styles.css";
import "./reset.css";
import { useReducer } from 'react';
import reducer from './reducer';

function App() {
  //const windowWidthSize = useRef<number>(window.innerWiddth);
  const [state, dispatch] = useReducer<any>(reducer,{ positions: [], speed: 0, distance: 0, timestamp: 0 });

  return (
    
    <Main state={state} dispatch={dispatch}/>
  )
}

export default App