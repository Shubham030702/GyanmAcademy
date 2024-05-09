import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import Logo from "./components/logo";
import Faculty from "./components/Faculty";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from "./components/Experience";
function App() {
  return (
    <>
    <BrowserRouter>
    <logo/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Faculty' element={<Faculty/>}></Route>
      <Route path='/Experience' element={<Experience/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
