import { NavLink, Outlet } from "react-router";
import '../styles/Layout.css';

export default function Layout(){
    function toggleMinimal(){document.body.classList.toggle('minimal-mode')}
    return (
        <>
        <nav className="Layout">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact Me</NavLink>
            <button id="tgm" onClick={toggleMinimal}></button>
        </nav>
        <Outlet/>
        </>        
    )
}