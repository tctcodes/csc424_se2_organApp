import { setAuthToken } from "utils/setAuthToken";
import history from 'utils/history';
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload:decoded
    }
};

export const clearUser = () =>{
    localStorage.removeItem('token');
    history.push('/')
    location.reload(true);
    setAuthToken(false);
    return{
        type: CLEAR_USER

    }
}