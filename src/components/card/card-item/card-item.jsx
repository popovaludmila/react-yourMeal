import { useSelector } from "react-redux";
import cardItemStyles from "./card-item.module.css";

export const CardItem = ({item}) => {
    const {src, price, name, weight} = item;

    const cardItems = useSelector(state => state.cart.cart);

    let count = 0;

    cardItems.forEach(cardItem => {
        if(cardItem.id === item.id){
            count++;
        }
    })
    
    return (
        <li className={cardItemStyles.item}>
            <img className={cardItemStyles.img} src={require(`../../../images/burgers/${src}`)} alt={name} width="64" height="52" />
            <div className={cardItemStyles.content}>
                <p>{name}</p>
                <span className={cardItemStyles.weight}>{weight}г</span>
                <span>{price}₽</span>
            </div>
            <div className={cardItemStyles.btn}>
                <button className={cardItemStyles.minus}>-</button>               
                    <input onChange={(e) => e.target.value} className={cardItemStyles.count} type="number" value={count} min="1" max="99"  autoComplete="off"/>
                <button className={cardItemStyles.plus}>+</button>
            </div>
        </li>
    )
}