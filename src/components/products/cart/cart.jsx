import { useDispatch, useSelector} from "react-redux";
import cartStyles from "./cart.module.css";
import { addItem} from "../../../store/slices/cartSlice";

export const Cart = ({product}) => {
    const {id, src, price, name, weight, category} = product;
   
    const card = useSelector(state => state.cart.card);

    const item = card.find(item => item.id === id);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addItem(product));       
    }

    return (
        <li className={cartStyles.item}>
            <img src={require(`../../../images/${category}s/${src}`)} alt={name} width="276" height="220" />
            <span className={cartStyles.price}>{price}₽</span>
            <p className={cartStyles.name}>{name}</p>
            <span className={cartStyles.weight}>{weight}г</span>
            
            {item ? 
                <button onClick={addProductToCart} className={cartStyles.btn} style={ {color: "#FFF", backgroundColor: "#FFAB08"}}>В корзине</button> : 
                <button onClick={addProductToCart} className={cartStyles.btn}>Добавить</button>
            }
        </li>
    )
}