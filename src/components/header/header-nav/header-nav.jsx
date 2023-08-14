

import headerNavStyles from "./header-nav.module.css";

export const HeaderNav = ({img, title}) => {
    return (
            <li className={headerNavStyles.item}>
                    <img src={require(`../../../images/icons/${img}`)} alt={title} width="24" height="24" />
                    <a className={headerNavStyles.link} href="p">
                        <span>{title}</span>
                    </a>
            </li> 
    )
}
