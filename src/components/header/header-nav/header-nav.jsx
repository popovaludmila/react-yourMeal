import { Link } from "react-router-dom";
import headerNavStyles from "./header-nav.module.css";

export const HeaderNav = ({img, title, link}) => {
    return (
            <li className={headerNavStyles.item}>
                    <img src={require(`../../../images/icons/${img}`)} alt={title} width="24" height="24" />
                    <Link className={headerNavStyles.link} to={link}>
                        <span>{title}</span>
                    </Link>
            </li> 
    )
}
