import React,{useState} from "react";
import Child1 from "./Child1";

function Parent1(){
    const [loading1,setLoading1] = useState(true);
    const [arr,setArr] = useState([]);
    const [err,setErr] = useState("");
    const myFun = (arg1)=>{
       // const {loading,products,error} = arg1;
        const {loading,...test} = arg1;
        setLoading1(loading);
      //  setArr(products);
       // setErr(error);      
        console.log(loading);
        console.log(test);
        //console.log(error1);
    };
    return(
        <React.Fragment>
            <Child1 key1={myFun}></Child1>
            {JSON.stringify(loading1)}
            {JSON.stringify(arr)}
            {err}
        </React.Fragment>
    )
};

export default Parent1;