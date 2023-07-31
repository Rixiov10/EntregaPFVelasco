import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, nombre, categoria, precio, imagen}) => {
    return (
        <article className= "CardItem">
            <header className= "Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Categoria: {categoria}
                </p>
            </section>
            <footer className='itemFooter'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail