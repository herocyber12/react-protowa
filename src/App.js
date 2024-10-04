import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from "./pages/Login";
import MainContents from './component/MainContent';
import { Route, Routes, BrowserRouter} from "react-router-dom";

function App(){
    /*
    *@__TK = token key untuk user
    */
    const key = sessionStorage.getItem('token');
    let content;

    if (key) {
        content = (
            <BrowserRouter>
                <MainContents />
            </BrowserRouter>
        );
    } else {
        content = (
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      );
    }

    console.log(key);
    return (
        <div>
            {content}
        </div>
    );
}

export default App;