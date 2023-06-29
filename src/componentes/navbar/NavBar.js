import CartWidget from "../cartwidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Videjuegos Las Playitas</h2>
            <div>
                <button>Juegos Play Station 2</button>
                <button>Juegos Play Station 3</button>
                <button>Juegos Play Station 4</button>
                <button>Juegos Play Station 5</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 