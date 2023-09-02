import cardStyles from "./card.module.css";
import { useSelector } from "react-redux";
import delivery from "../../images/icons/Доставка.svg";
import { v4 as uuidv4 } from 'uuid';
import { CardItem } from "./card-item/card-item";


export const Card = () => {

    const cardItems = useSelector(state => state.cart.cart);
    let totalCount = cardItems.length;
    let totalPrice = 0;

    cardItems.forEach((item) => (totalPrice += Number(item.price)));

    const items = Array.from(new Set(cardItems));

    const orderItems = items.map((item) => {
        return  <CardItem key={uuidv4()} item={item}/>
    })

    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.title_content}>
                 <h3 className={cardStyles.title}>Корзина</h3>
                 <span className={cardStyles.count}>{totalCount}</span>
            </div>

            {(cardItems.length &&
                <div>
                    <ul className={cardStyles.list}>
                        {orderItems}
                    </ul>
                    <div className={cardStyles.price}>
                        <p>Итого</p>
                        <span>{totalPrice} ₽</span>
                    </div>
                    <button className={cardStyles.btn} type="submit">Оформить заказ</button>
                    <div className={cardStyles.note}>
                        <img src={delivery} alt="Иконка доставки" width="24" height="24" />
                        <span className={cardStyles.text}>Бесплатная доставка</span>
                    </div>
                </div> ) || 
                <p>Тут пока пусто :(</p>}
        </div>
    )
}