import "./ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({id, nombre, categoria, precio, imagen}) => {
    const [quantiyAdded, setQuantityAdded]= useState(0)

    const {addItem} = useContext(CartContext)

    const handledOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

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
                {
                    quantiyAdded > 0 ? (
                        <Link to='/cart' className='option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={(handledOnAdd)}/>
                        )
                }
            </footer>
        </article>
    )
}

export default ItemDetail