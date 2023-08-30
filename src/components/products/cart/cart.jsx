import cartStyles from "./cart.module.css";
import cheeseBurger from "../../../images/burgers/cheese.png";

export const Cart = () => {
    return (
        <li className={cartStyles.item}>
            <img src={cheeseBurger} alt=" "width="276" height="220" />
            <span className={cartStyles.price}>689₽</span>
            <p className={cartStyles.name}>Мясная бомба</p>
            <span className={cartStyles.weight}>520г</span>
            <button className={cartStyles.btn}>Добавить</button>
        </li>
    )
}