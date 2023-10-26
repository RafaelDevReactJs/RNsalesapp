import React from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Products from "../pages/products/Products";


function AppRoutes() {
   return(
       <BrowserRouter>
           <Routes>
                <Route exact path="/products"  element = { <Products /> } />
           </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;