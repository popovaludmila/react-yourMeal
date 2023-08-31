import { Cart } from "./cart/cart";
import productsStyles from "./products.module.css";
import products from "../../services/burgers.json";

export const Products = () => {
    
    const burgers = products.burgers.map((burger) => {
        return <Cart 
            key={burger.id}
            product={burger} />
    });

    return (
        <div className={productsStyles.content}>
            <h2 className={productsStyles.title}>Бургеры</h2>
            <ul className={productsStyles.list}>
                {burgers}
            </ul>
        </div>
    )
}