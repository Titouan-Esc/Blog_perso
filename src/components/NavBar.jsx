import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="/contact">
                <p>Contact</p>
            </NavLink>
        </nav>
    )
}

export default NavBar
