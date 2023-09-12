import { useSelector } from "react-redux";
import { Cart } from "./cart/cart";
import productsStyles from "./products.module.css";
import { useMemo } from "react";

export const Products = ({category}) => {
    const ingredients = useSelector(state => state.cart.products);

    const products = useMemo(
        () => ingredients.filter((item) => item.category === category),
        [ingredients, category]);

    const items = products.map((item) => {
        return <Cart 
            key={item.id}
            product={item}     
            imgHref={category} />
    });

    return (
        <div className={productsStyles.content}>
            <h2 className={productsStyles.title}>Бургеры</h2>
            <ul className={productsStyles.list}>
                {items}
            </ul>
        </div>
    )
}