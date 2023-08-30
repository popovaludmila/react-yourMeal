import cartStyles from "./cart.module.css";

export const Cart = ({image, price, name, weight}) => {
    return (
        <li className={cartStyles.item}>
            <img src={require(`../../../images/burgers/${image}`)} alt={name} width="276" height="220" />
            <span className={cartStyles.price}>{price}₽</span>
            <p className={cartStyles.name}>{name}</p>
            <span className={cartStyles.weight}>{weight}г</span>
            <button className={cartStyles.btn}>Добавить</button>
        </li>
    )
}