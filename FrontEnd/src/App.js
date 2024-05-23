import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Faculty from "./components/Faculty";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from "./components/Experience";
import Registration from "./components/Registration";
function App() {
  return (
    <>
      <div className="content">
        <BrowserRouter>
          <div className="header">
            <Logo />
            <Navbar />
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Faculty' element={<Faculty />}></Route>
            <Route path='/Experience' element={<Experience />}></Route>
            <Route path='/Registration' element={<Registration />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
