//
import React, { useEffect,useRef } from "react";
//useSelector hook is used to perform subscription
// useDispatch hook is used to perform the dispatch opertaion
import {useSelector,useDispatch} from "react-redux"
import { productsActions } from "./actions/ProductsActions";
import { loginActions } from "./actions/loginActions";
function App() {


  const dispatch = useDispatch();
  console.log(res)
  useEffect(()=>{
    dispatch(productsActions())
    dispatch(loginActions())
    
  },[])
  

  const res = useSelector(state=>state);
  
  return (
    <React.Fragment>

        <h1>{JSON.stringify(res)}</h1>



    </React.Fragment>

  );
}

export default App;
