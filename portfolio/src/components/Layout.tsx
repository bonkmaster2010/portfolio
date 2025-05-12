import { NavLink, Outlet } from "react-router";
import '../styles/Layout.css';

export default function Layout(){
    return (
        <>
        <nav className="Layout">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact Me</NavLink>
            <button id="tgm" onClick={() => document.body.classList.toggle('minimal-mode')}></button>
        </nav>
        <Outlet/>
        </>        
    )
}