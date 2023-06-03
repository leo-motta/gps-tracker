import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ state, children }: any) => {
    if(state.user) return children

    return <Navigate to='/' />
}

export default PrivateRoute;