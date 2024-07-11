import { NavLink } from "react-router-dom"

export default function NavLinks() {
    return (
        <>
            <li>
                <NavLink to='/' className={`${({ isActive }: { isActive: boolean }) => (isActive ? "font-semibold" : "")}`}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/projects' className={`${({ isActive }: { isActive: boolean }) => (isActive ? "font-semibold" : "")}`}>Projects</NavLink>
            </li>
        </>
    )
}