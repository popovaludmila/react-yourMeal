import { useLocation } from "react-router-dom";
import { HeaderMenuItem } from "../header-menu-item/header-menu-item";
import headerMenuStyles from "./header-menu.module.css";

export const HeaderMenu = () => {

    const location = useLocation();

    const setActive = (link) => link === location.pathname ? true : false;

  return (
    <div className="categories">
            <div className="container">
                <nav className={headerMenuStyles.menu}>
                    <ul className={headerMenuStyles.list}>
                        <HeaderMenuItem img="Бургер.svg" title="Бургеры" link="/" active={setActive("/")} />
                        <HeaderMenuItem img="Закуски.svg" title="Закуски" link="/snacks" active={setActive("/snacks")} />
                        <HeaderMenuItem img="Хот-доги.svg" title="Хот-доги" link="/hot_dogs" active={setActive("/hot_dogs")} />
                        <HeaderMenuItem img="Комбо.svg" title="Комбо" link="/combos" active={setActive("/combos")}/>
                        <HeaderMenuItem img="Шаурма.svg" title="Шаурма" link="/shawarmas" active={setActive("shawarmas/")} />
                        <HeaderMenuItem img="Пицца.svg" title="Пицца" link="/pizzas" active={setActive("/pizzas")} />
                        <HeaderMenuItem img="Вок.svg" title="Вок" link="/woks" active={setActive("/woks")}/>
                        <HeaderMenuItem img="Десерты.svg" title="Десерты" link="/desserts" active={setActive("/desserts")}/>
                        <HeaderMenuItem img="Соусы.svg" title="Соусы" link="/sauces" active={setActive("/sauces")} />
                    </ul>
                </nav>
           </div>
        </div>
  )
}

