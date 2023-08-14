import { HeaderNav } from "./header-nav/header-nav";
import logo from "../../images/Logo.svg";
import yourMeal from "../../images/YourMeal.svg";
import burger from "../../images/pic.png"
import headerStyles from './header.module.css';
import json from "../../services/categories.json"
import { useMemo } from "react";

const Header = () => {

    const categoriesData = useMemo(
        () => json.categories.map((item) => {
            return <HeaderNav key={item.id} img={item.src} title={item.name}/>
        }), []
    )

    return (
      <header>
        <div className={headerStyles.header}>
            <div className="container">
                <div className={headerStyles.intro}>
                    <div className={headerStyles.logo}>
                        <img src={yourMeal} alt="YourMeal" />
                        <img className={headerStyles.logoIcon} src={logo} alt="Логоттип" />
                    </div>
                    <div className={headerStyles.content}>
                        <img src={burger} alt="Фон из бургера" />
                        <div className={headerStyles.textIntro}>
                            <h1 className={headerStyles.title}>Только самые <span className={headerStyles.span}>сочные бургеры!</span></h1>
                            <p className={headerStyles.text}>Бесплатная доставка от 599₽</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="categories">
            <div className="container">
                <nav className={headerStyles.menu}>
                    <ul className={headerStyles.list}>
                        {categoriesData}
                    </ul>
                </nav>
           </div>
        </div>
        
      </header>
    );
  }
  
  export default Header;
  