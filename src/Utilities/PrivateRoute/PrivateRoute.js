import { useSelector } from 'react-redux'
import {Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }){
    const authorize = useSelector((state) => state.auth.login)
    return authorize ? children : <Navigate to ="/login"/>
}