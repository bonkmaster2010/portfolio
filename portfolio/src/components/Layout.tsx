import { NavLink, Outlet } from "react-router-dom";
import '../styles/Layout.css';

export default function Layout(){
    return (
        <>
        <nav className="Layout">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <button id="tgm" onClick={() => document.body.classList.toggle('minimal-mode')}></button>
        </nav>
        <Outlet/>
        </>        
    )
}