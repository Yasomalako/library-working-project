import React from "react";
import {Home,BooksScreen,BooksDetails} from "./Components/Pages"
import{Route,Routes} from "react-router-dom"

function Router(){
    return (
      <div className="Router">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Books-Screen" element={<BooksScreen/>}/>
            <Route path="Books-Details" element={<BooksDetails/>}/>
        </Routes>
      </div>
    );
  }
  
  export default Router;
  