import { useDispatch} from "react-redux";
import cartStyles from "./cart.module.css";
import { addItem} from "../../../store/slices/cartSlice";
import { createRef } from "react";

export const Cart = ({product}) => {
    const {src, price, name, weight} = product;
    let {inCart} = product;

    const btnRef = createRef();

    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItem(product));
        console.log(product)
        btnRef.current.style.backgroundColor = "#FFAB08";
        btnRef.current.style.color = "#FFFFFF"; 
    }

    return (
        <li className={cartStyles.item}>
            <img src={require(`../../../images/burgers/${src}`)} alt={name} width="276" height="220" />
            <span className={cartStyles.price}>{price}₽</span>
            <p className={cartStyles.name}>{name}</p>
            <span className={cartStyles.weight}>{weight}г</span>
            <button 
                onClick={addProductToCart} 
                ref={btnRef} 
                className={cartStyles.btn}>
                {inCart ? "Добавить" : "В корзине"}  
            </button>
        </li>
    )
}