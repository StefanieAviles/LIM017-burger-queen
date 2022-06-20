
export default function MenuItem({option, addItemQty }) {
    const {id, item, price} = option;

    const addItemToOrder = () => {
          addItemQty(id, option);
    }
    
    return (
        <button onClick={addItemToOrder} className="menuItem">{item} ${price}</button>
    )
}