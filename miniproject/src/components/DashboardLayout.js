import React from "react";
import {Link,Outlet} from "react-router-dom"
function DashboardLayout(){

    return(
        <React.Fragment>
                <Link to="/" style={{marginLeft:100}}>Products</Link>
                <Link to="/employee" style={{marginRight:100}}>employee</Link>
                <Link to="/list" style={{marginRight:100}}></Link>
                <button>Logout</button>
                <br></br>
                <br></br>
                <Outlet/>
        </React.Fragment>
    )

}

export default DashboardLayout;