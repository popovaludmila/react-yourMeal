import { CardItem } from "./card-item/card-item"
import cardStyles from "./card.module.css";
import delivery from "../../images/icons/Доставка.svg";

export const Card = () => {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.title_content}>
                 <h3 className={cardStyles.title}>Корзина</h3>
                 <span className={cardStyles.count}>4</span>
            </div>
            <div >
                <ul>
                   <CardItem />
                </ul>
                <div className={cardStyles.price}>
                    <p>Итого</p>
                    <span>1200 ₽</span>
                </div>
                <button className={cardStyles.btn} type="submit">Оформить заказ</button>
                <div className={cardStyles.note}>
                    <img src={delivery} alt="Иконка доставки" width="24" height="24" />
                    <span className={cardStyles.text}>Бесплатная доставка</span>
                </div>
            </div>
        </div>
    )
}