import CartWidget from "../cartwidget/CartWidget"
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="Navbar">
            <Link to="/">
                <h2>Videjuegos Las Playitas</h2>
            </Link>
            <div className="categories">
                <NavLink to={`/categoria/juegos Play Station 2`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos Play Station 2</NavLink>
                <NavLink to={`/categoria/juegos Play Station 3`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos Play Station 3</NavLink>
                <NavLink to={`/*`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos Play Station 4</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 