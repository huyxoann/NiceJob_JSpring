import {useState} from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import NavbarCustom from "./components/Navbar.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavbarCustom></NavbarCustom>
            <Content></Content>
        </>
    )
}

export default App
