import { useDispatch } from "react-redux";
import { useEffect } from "react";
import items from "../../services/products.json";
import { getProducts } from "../../store/slices/cartSlice";
import { Route, Routes } from "react-router-dom";
import {Layout} from "../layout/layout";
import { BurgersPage, HotDogsPage, SnacksPage } from "../../pages";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProducts(items.products));
  }, [dispatch]);



  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <BurgersPage /> } />
          <Route path="snacks" element={ <SnacksPage /> } />
          <Route path="hot_dogs" element={ <HotDogsPage /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
