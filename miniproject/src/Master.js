import React from "react"
import { Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function Master(){

    return(

        //<React.Fragment>
                <Routes>
                    {/* <Route path="/" element={<Layout/>}>
                        <Route index element={<Login/>}></Route>
                        <Route path="/dashboard" element={<Dashboard/>}></Route>
                    </Route> */}
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="dashboard/*" element={<Dashboard/>}></Route>
                </Routes>
        //s</React.Fragment>

    )

}

export default Master;