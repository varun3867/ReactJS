import React from 'react';
import {Link,Outlet} from "react-router-dom"
function Layout(){

    return(
        <React.Fragment>
            <Link to="/" style={{marginRight:100}}>Page1</Link>
            <Link to="/page_two"  style={{marginRight:100}}>Page2</Link>
            <Link to="/page_three" style={{marginRight:100}}>Page3</Link>
            <br></br><br></br>
            <Outlet/>
        </React.Fragment>
    )

}

export default Layout;