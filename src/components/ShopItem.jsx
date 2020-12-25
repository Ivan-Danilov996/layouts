export default function ShopItem({item}) {

    return (
        <div className="item">
            <img src={item.img} alt=""/>
            <div className="name">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">${item.price}</div>
            <button>add to card</button>
        </div>
    )
}