import headerIntroStyles from "./header-intro.module.css";
import logo from "../../../images/Logo.svg";
import burger from "../../../images/pic.png";
import logoText from "../../../images/YourMeal.svg";

export const HeaderIntro = () => {
  return (
    <div className={headerIntroStyles.header}>
            <div className="container">
                <div className={headerIntroStyles.intro}>
                    <div className={headerIntroStyles.logo}>
                        <img src={logoText} alt="YourMeal" />
                        <img className={headerIntroStyles.logoIcon} src={logo} alt="Логоттип" />
                    </div>
                    <div className={headerIntroStyles.content}>
                        <h1 className="visually-hidden">Ресторан вкусных бургеров и не только</h1>
                        <img src={burger} alt="Фон из бургера" />
                        <div className={headerIntroStyles.textIntro}>
                            <p className={headerIntroStyles.title}>Только самые <span className={headerIntroStyles.span}>сочные бургеры!</span></p>
                            <p className={headerIntroStyles.text}>Бесплатная доставка от 599₽</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
  )
}
