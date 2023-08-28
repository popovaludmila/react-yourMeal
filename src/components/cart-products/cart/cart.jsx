export const Cart = ({price, name, weight, image}) => {
    return (
        <li>
            <img src={image} alt={name} width="276" height="220" />
            <span>{price}</span>
            <p>{name}</p>
            <span>{weight}</span>
            <button>Добавить</button>
        </li>
    )
}