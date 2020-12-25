export default function ShopCard({card}) {
    return (
        <div className="card">
            <img className="card-img" src={card.img} alt=""/>
            <div className="card-name">{card.name}</div>
            <div className="card-color">{card.color}</div>
            <div className="card-price">${card.price}</div>
            <button>add to card</button>
        </div>
    )
}