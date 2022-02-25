import {LOGIN,LOGIN_FAIL,LOGIN_SUCCESS} from "../constants/LoginConstants";
import axios from "axios"

export const loginAction = (login_details) => {

    return async (dispatch)=>{
        dispatch({
            
            type:LOGIN,
            login:"",
            err:"",
            loading:false

        })
    
    try{

        const {Data} = await axios.post("http://localhost:8080/login",{"headers":{"token":"ashokit"}},login_details)
        const {login} = data
        dispatch({
            type:LOGIN_SUCCESS,
            login:login,
            err:"",
            lloading:true
        })
    }
    catch(err){
        dispatch({
            type:LOGIN_FAIL,
            login:"",
            err:err.message,
            loading:false
        })

    }

}

}