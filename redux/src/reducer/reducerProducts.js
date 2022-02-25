import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "../constants/ProductsConstants"



const initialState = {
    loading:false,
    products:[],
    error:""
}

//reudcer takes two arguments
//1.state 2.action
//action receives the data from actions(productsActions)
//action takes the json object that is passed argument to the dispatch() function in actions(productsActions.js) 
export const productsReducer = (state=initialState,action) =>{

    switch(action.type){
        case GET_PRODUCTS:
        case GET_PRODUCTS_FAIL:
        case GET_PRODUCTS_SUCCESS:
            return{     //reducer should return result to store
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }
        default:
            return state;
    }


}