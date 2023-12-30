import './App.css'
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Jobs from '../pages/Jobs.jsx'
import Company from '../pages/Company.jsx'
import NavbarCustom from "../components/Navbar.jsx";

function App() {

    return (
        <>
            <NavbarCustom></NavbarCustom>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/about'} element={<About />}/>
                    <Route path={'/jobs'} element={<Jobs />}/>
                    <Route path={'/company'} element={<Company />}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App
