import React from "react";
import {Routes,Route,Link} from "react-router-dom"
import Products from "./Products";
import Employees from "./Employees"
import Lists from "./Lists"
function Dashboard(){

    const logout = () => {
        console.log("Logout");
    }

    return(
        <React.Fragment>
                 <Link to="products" style={{marginRight:100}} >products</Link>
                 <Link to="employees" style={{marginRight:100}}>Employees</Link>
                 <Link to="lists" style={{marginRight:100}}>Lists</Link>
                 <button onClick={logout}>Logout</button>
             <Routes>
                {/* <Route path="/" element={<DashboardLayout/>}></Route>
                <Route index element={<Products/>}></Route> */}



                <Route path="products" element={<Products/>}></Route>
                <Route path="employees" element={<Employees/>}></Route> 
                <Route path="lists" element={<Lists/>}></Route>
            </Routes> 
            </React.Fragment>
    )

}

export default Dashboard;