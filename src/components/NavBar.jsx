import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="selected">
                <p>Home</p>
            </NavLink>
            <NavLink to="/contact" activeClassName="selected">
                <p>Contact</p>
            </NavLink>
        </nav>
    )
}

export default NavBar
