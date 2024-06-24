import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Faculty from "./components/Faculty";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from "./components/Experience";
import Registration from "./components/Registration";
function App() {
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    document.body.classList.remove('day', 'night');
    if (theme === 'day') {
      import('./Day_Mode.css').then(() => {
        document.body.classList.add('day');
      });
    } else {
      import('./Night_mode.css').then(() => {
        document.body.classList.add('night');
      });
    }
  });

  const toggleTheme = (prevTheme) => {
    setTheme(prevTheme);
  };

  return (
    <>
      <div className="content">
        <BrowserRouter>
          <div className="header">
            <Logo toggleTheme={toggleTheme} />
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
