import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams ()
    
    useEffect(() => {

        const docRef = doc(db, "Productos", itemId);
        getDoc(docRef)
            .then((resp) => {
                setProduct({ ...resp.data(), id: resp.id})
            })
    },  [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

