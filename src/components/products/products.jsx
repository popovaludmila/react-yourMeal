import { useSelector } from "react-redux";
import { Cart } from "./cart/cart";
import productsStyles from "./products.module.css";
import { useMemo } from "react";

export const Products = ({category}) => {
    const ingredients = useSelector(state => state.cart.products);
    console.log(ingredients)

    const products = useMemo(
        () => ingredients.filter((item) => item.category === category),
        [ingredients, category]);

    const items = products.map((item) => {
        return <Cart 
            key={item.id}
            product={item} />
    });
    console.log(products)

    return (
        <div className={productsStyles.content}>
            <h2 className={productsStyles.title}>Бургеры</h2>
            <ul className={productsStyles.list}>
                {items}
            </ul>
        </div>
    )
}