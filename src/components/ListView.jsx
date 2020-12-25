import ShopItem from "./ShopItem"

export default function ListView(props) {
    return (
        props.items.map((item, index) => {
            return <ShopItem item={item} key={index}/>
        })
    )
}