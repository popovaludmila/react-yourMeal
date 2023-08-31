import { useDispatch } from "react-redux";
import cartStyles from "./cart.module.css";
import { addProduct } from "../../../store/slices/cartSlice";

export const Cart = ({product}) => {
    const {image, price, name, weight} = product;
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addProduct(product))
    }

    return (
        <li className={cartStyles.item}>
            <img src={(`${image}`)} alt={name} width="276" height="220" />
            <span className={cartStyles.price}>{price}₽</span>
            <p className={cartStyles.name}>{name}</p>
            <span className={cartStyles.weight}>{weight}г</span>
            <button onClick={addProductToCart} className={cartStyles.btn}>Добавить</button>
        </li>
    )
}