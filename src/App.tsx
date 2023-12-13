import React from 'react';
import {BrowserRouter, Route, Router, Routes, Link} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Developers from "./components/Developers/Developers";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Family from "./components/Family/Family";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import ".//OtherStyles/App.css"

function App() {

  return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Developers" element={<Developers />}></Route>
                <Route path="/Family" element={<Family />}></Route>
                <Route path="/Member-info" element={<MemberInfo />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
