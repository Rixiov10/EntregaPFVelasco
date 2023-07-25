

const Item =({id, nombre, precio, stock, imagen}) => {

    return (
        <article className='cardItem'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <button className="Option"> Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item