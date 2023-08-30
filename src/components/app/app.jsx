import { Card } from "../card/card";
import Header from "../header/header";
import { Products } from "../products/products";
import appStyles from "./app.module.css";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className={appStyles.main}>
            <Card />
            <Products />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
