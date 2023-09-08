import { useDispatch } from "react-redux";
import cardItemStyles from "./card-item.module.css";
import { addItem, decreaseItem, deleteItem } from "../../../store/slices/cartSlice";

export const CardItem = ({item}) => {
    const {src, price, name, weight, count} = item;
    const dispatch = useDispatch();

    const increaseCount = () => {
        dispatch(addItem(item));
    }

    const onMinusClick = () => {
        if(count > 1) {
            dispatch(decreaseItem(item));
        } else {
            dispatch(deleteItem(item));
        }
    }
    

    return (
        <li className={cardItemStyles.item}>
            <img className={cardItemStyles.img} src={require(`../../../images/burgers/${src}`)} alt={name} width="64" height="52" />
            <div className={cardItemStyles.content}>
                <p>{name}</p>
                <span className={cardItemStyles.weight}>{weight}г</span>
                <span>{price}₽</span>
            </div>
            <div className={cardItemStyles.btn}>
                <button onClick={onMinusClick} className={cardItemStyles.minus}>-</button>               
                    <span className={cardItemStyles.count}>{count}</span>
                <button onClick={increaseCount} className={cardItemStyles.plus}>+</button>
            </div>
        </li>
    )
}