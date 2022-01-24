import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { user } from "../Config/Redux/UserSlice"

export default function useHandleLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (res) => {
        var API_URL = 'https://reservaksin-be.herokuapp.com'
        let citizenData = {
            ...res
        }
        // console.log(citizenData)
        // console.log(citizenData.DataCitizen.id)
        dispatch(user({citizenData}))
    }
    return handleLogin
}