import MenuItem from './MenuItem.jsx';
export default function MenuList({data, addItemQty }) {
    return (
        <section className="menuList" id="menuList"> 
        {data.map(option => {
            return <MenuItem key={option.id} option={option} addItemQty={addItemQty} /> 
        })}
    </section>  
    )
}