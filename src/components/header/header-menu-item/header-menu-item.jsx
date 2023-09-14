import { Link} from "react-router-dom";
import headerMenuItemStyles from "./header-menu-item.module.css";

export const HeaderMenuItem = ({img, title, link, active}) => {

    const setActive = (active) => active ? `${headerMenuItemStyles.item} ${headerMenuItemStyles.active}` : `${headerMenuItemStyles.item}`;

    return (
            <li className={setActive(active)}>
                    <img src={require(`../../../images/icons/${img}`)} alt={title} width="24" height="24" />
                    <Link className={headerMenuItemStyles.link} to={link}>
                        <span>{title}</span>
                    </Link>
            </li>             
    )
}
