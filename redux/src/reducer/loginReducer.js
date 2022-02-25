import { LOGIN,LOGIN_FAIL,LOGIN_SUCCESS } from "../constants/LoginConstants"

const initialState = {
    login:"",
    err:"",
    loading:false
}

export const loginReducer = (state=initialState,action) => {

    switch(action.type){

        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL: 
            return{
                ...state,
                login:action.login,
                err:action.err,
                loading:action.loading
            }
        default:
            return state;
    }

}