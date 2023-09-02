import { useDispatch } from "react-redux";
import cartStyles from "./cart.module.css";
import { addProduct } from "../../../store/slices/cartSlice";
import { createRef, useState } from "react";

export const Cart = ({product}) => {
    const [isClicked, setIsClicked] = useState();
    const {src, price, name, weight} = product;
    const btnRef = createRef();

    const activeStyle = {
        backgroundColor: "#FFAB08",
        color: "#FFFFFF"
    };

    const handleOnFocus = () => {
        btnRef.current.style.backgroundColor = "#F86310";
        btnRef.current.style.color = "#FFFFFF"; 
    }
            
    const handleOnBlur = () => {
        btnRef.current.style.backgroundColor = "#F2F2F3";
        btnRef.current.style.color = "#000";
    }

    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addProduct(product));
        setIsClicked(true);
    }

    return (
        <li className={cartStyles.item}>
            <img src={require(`../../../images/burgers/${src}`)} alt={name} width="276" height="220" />
            <span className={cartStyles.price}>{price}₽</span>
            <p className={cartStyles.name}>{name}</p>
            <span className={cartStyles.weight}>{weight}г</span>
            <button 
                onMouseEnter={handleOnFocus} 
                onMouseLeave={handleOnBlur} 
                onClick={addProductToCart} 
                ref={btnRef} 
                className={cartStyles.btn}>
                {!isClicked ? "Добавить" :" Добавлено"}  
            </button>
        </li>
    )
}