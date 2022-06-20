export default function MenuItem({ order, btnText, updateState}) {

    function changeState() {
        updateState(order.id, btnText);
    }
    return (
        <div className="orderStatusItem">
                    <p>Cliente: {order.client}</p>
                    <p>Mesa: {order.table}</p>
                    <p>Estado: {order.state}</p>
                    <details>
                        <summary>Orden</summary>
                        {order.order.map((e) => {
                            return <p>{e.item}  {e.count}</p>
                        })}
                    </details>
                    <button className="btnState" onClick={changeState}> {btnText} </button>
                </div>
    )
}