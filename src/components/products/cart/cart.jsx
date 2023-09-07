import { useDispatch } from "react-redux";
import cartStyles from "./cart.module.css";
import { addProduct } from "../../../store/slices/cartSlice";
import { createRef, useState } from "react";

export const Cart = ({product}) => {
    const [isClicked, setIsClicked] = useState();
    const {src, price, name, weight} = product;
    const btnRef = createRef();

    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addProduct(product));
        setIsClicked(true);
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
                {!isClicked ? "Добавить" : "В корзине"}  
            </button>
        </li>
    )
}