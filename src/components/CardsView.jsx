import ShopCard from "./ShopCard"

export default function CardsView(props) {

    return (
        <div className="cards">
            {props.cards.map((card, index) => {
                return <ShopCard card={card} key={index} />
            })}
        </div>
    )
}