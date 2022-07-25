import './ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {  
        <div>
            <h2>{props.greeting}</h2>
        </div>    
    const onAdd = (cantidad) =>{
        alert(`usted ha comprado ${cantidad} producto${cantidad>1 ? 's' : ''}`)
        return (
            <div>
                <h3 className="greeting">{props.greeting}</h3>
                <ItemCount 
                initial = {1}
                stock = {15}
                onAdd = {onAdd} />
            </div>
        )
    }
}    
    export default ItemListContainer;
