import React from "react"
import { Outlet } from 'react-router-dom'
function Layout(){

    return(
        <React.Fragment>
            <Outlet/>
        </React.Fragment>

    )

}

export default Layout;