import cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return (
        <div>
            <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}> 
            <img src={cart} alt="cart-widget" />
            {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget 