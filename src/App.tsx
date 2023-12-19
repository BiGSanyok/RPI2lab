import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Developers from "./components/Developers/Developers";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PersonPreviewCard from "./components/PersonPreview/PersonPreviewCard";
import Family from "./components/Family/Family";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import "./App.css"
import "./App.css"

function App() {

  return (
      <BrowserRouter>
        <Header />
        <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Developers" element={<Developers />}></Route>
                    <Route path="/Family" element={<Family />}></Route>
                    <Route path="/Member-info" element={<MemberInfo />}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
