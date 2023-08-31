import cardItemStyles from "./card-item.module.css";

export const CardItem = ({item}) => {
    const {image, price, name, weight} = item;
    
    return (
        <li className={cardItemStyles.item}>
            <img className={cardItemStyles.img} src={`(${image})`} alt={name} width="64" height="52" />
            <div className={cardItemStyles.content}>
                <p>{name}</p>
                <span className={cardItemStyles.weight}>{weight}г</span>
                <span>{price}₽</span>
            </div>
            <div className={cardItemStyles.btn}>
                <button className={cardItemStyles.minus}>-</button>               
                    <input onChange={(e) => e.target.value} className={cardItemStyles.count} type="number" value="1" min="1" max="99"  autoComplete="off"/>
                <button className={cardItemStyles.plus}>+</button>
            </div>
        </li>
    )
}