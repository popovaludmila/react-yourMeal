import cardItemStyles from "./card-item.module.css";
import cheeseBurger from "../../../images/burgers/cheese.png";

export const CardItem = () => {
    return (
        <li className={cardItemStyles.item}>
            <img className={cardItemStyles.img} src={cheeseBurger} alt="" width="64" height="52" />
            <div className={cardItemStyles.content}>
                <p>Супер сырный</p>
                <span className={cardItemStyles.weight}>512г</span>
                <span>550₽</span>
            </div>
            <div className={cardItemStyles.btn}>
                <button className={cardItemStyles.minus}>-</button>               
                    <input className={cardItemStyles.count} type="number" value="1" min="1" max="99"  autoComplete="off"/>
                <button className={cardItemStyles.plus}>+</button>
            </div>
        </li>
    )
}