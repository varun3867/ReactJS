import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./Layout";
import Pageone from "./Pages/Pageone"
import Pagetwo from "./Pages/Pagetwo"
import Pagethree from "./Pages/Pagethree"

function Master(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Pageone/>}></Route>
                    <Route path="/page_two" element={<Pagetwo/>}></Route>
                    <Route path="/page_three" element={<Pagethree/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )

}


export default Master;