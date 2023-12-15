import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Developers from "./components/Developers/Developers";
import Home from "./components/Home/Home";
import PersonPreviewBlock from "./components/PersonPreview/PersonPreviewBlock";
import Family from "./components/Family/Family";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import "./App.css"
import "./slider"
import SimpleCarousel from "./slider";
import "./App.css"

function App() {

  return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Developers" element={<Developers />}></Route>
                <Route path="/Family" element={<Family />}></Route>
                <Route path="/Member-info" element={<MemberInfo />}></Route>
            </Routes>
        </BrowserRouter>
            <SimpleCarousel />
        <Footer />
    </div>
  );
}

export default App;
