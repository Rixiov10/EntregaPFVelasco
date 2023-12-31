import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Cartitem from "../Cartitem/cartitem"   

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <Cartitem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() =>clearCart()} className="Buttom">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>checkout</Link>
        </div>
    )
}

export default Cart;
