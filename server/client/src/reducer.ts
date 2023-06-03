interface State {
    user:any,
    positions: L.LatLng[],
    speed: number,
    distance: number,
    timestamp: number,
    showpath: boolean
}

type Action = { type: 'login', payload: any }
| { type: 'add_position'; payload: L.LatLng } 
| { type: 'set_positions'; payload: L.LatLng[] } 
| { type: 'set_speed'; payload: number }
| { type: 'set_distance'; payload: number }
| { type: 'add_time'; payload: number }
| { type: 'set_showpath'; payload: boolean };

export default function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'login':
            return {...state, user: action.payload };
        case 'add_position':
            if( state.positions.length > 0
                && Math.abs(Math.abs(state.positions[state.positions.length - 1].lat) - Math.abs(action.payload.lat)) < 0.001
                && Math.abs(Math.abs(state.positions[state.positions.length - 1].lng) - Math.abs(action.payload.lng)) < 0.001) 
                {
                    return {...state}
                }
            else {
                return { ...state, positions: [...state.positions, action.payload] };
            }
        case 'set_positions':
            return { ...state, positions: action.payload };
        case 'set_speed':
            return { ...state, speed: action.payload };
        case 'set_distance':
            return { ...state, distance: action.payload + state.distance };
        case 'add_time':
            return {...state, timestamp: action.payload + state.timestamp };
        case 'set_showpath':
            return {...state, showpath: !state.showpath };
        default:
            throw new Error();
    }
}