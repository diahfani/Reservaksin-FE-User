import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from "../Config/Redux/LoginSlice"

export default function useHandleLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (res) => {
        const loginData = {
            email: res.email,
            login: true,
            token: res.token
        }
        dispatch(login(loginData))
        navigate("/")
    }
    return handleLogin
}