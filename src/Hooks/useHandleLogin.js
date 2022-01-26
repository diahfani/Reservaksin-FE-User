import { useDispatch } from 'react-redux'
import { user } from "../Config/Redux/UserSlice"

export default function useHandleLogin() {
    const dispatch = useDispatch()
    const handleLogin = (res) => {
        let citizenData = {
            ...res
        }
        dispatch(user({citizenData}))
    }
    return handleLogin
}