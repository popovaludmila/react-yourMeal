import { useDispatch } from "react-redux";
import { Card } from "../card/card";
import Header from "../header/header";
import { Products } from "../products/products";
import appStyles from "./app.module.css";
import { useEffect } from "react";
import items from "../../services/products.json";
import { getProducts } from "../../store/slices/cartSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProducts(items.products));
  }, [dispatch]);



  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className={appStyles.main}>
            <div>
              <Card />
            </div>
            <Products category="burger" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
