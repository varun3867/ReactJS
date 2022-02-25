import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL} from "../constants/ProductsConstants"
import axios from "axios"

export const productsActions = () => {
    return async (dispatch)=>{
        dispatch({
            type:GET_PRODUCTS,
            products:[],
            error:"",
            loading:false
        })

        try{

            const {data} = await axios.get("http://localhost:8080/products")
            dispatch({
                type:GET_PRODUCTS_SUCCESS,
                products:data,
                error:"",
                loading:true
            })

        }catch(err){
            dispatch({
                type:GET_PRODUCTS_FAIL,
                products:[],
                error:err.message,
                loading:true
            })
        }
    }
}