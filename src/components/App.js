import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import Navbar from "./Navbar";
import SelectItem from "./SelectItem";



function App() {
  
    return(
        <div className="app-container">
            <Router>
                <div>
                    <Navbar/>
                </div>

                <div className="path-container">
                    <Routes>
                        <Route exact path ='/itemlist' element={<ItemList/>}></Route>
                        <Route exact path ='/selectitem' element={<SelectItem/>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;
