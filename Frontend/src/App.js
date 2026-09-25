import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Restaurant from "./components/restaurant";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import SearchFood from "./components/SearchFood";
import RestHeader from "./components/RestHeader";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";

function App(){

    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
             <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route element={<SecondaryHome></SecondaryHome>}>
                  <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                  <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                  <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                  </Route>
                  <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
             </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)