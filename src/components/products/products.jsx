import { Cart } from "./cart/cart";
import productsStyles from "./products.module.css";

export const Products = () => {
    
    return (
        <div className={productsStyles.content}>
            <h2 className={productsStyles.title}>Бургеры</h2>
            <ul className={productsStyles.list}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </ul>
        </div>
    )
}