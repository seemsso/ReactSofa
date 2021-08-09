import { NavLink } from "react-router-dom";

import h from "./Header.module.scss";

const Header = () => {
  return (
    <div className={h}>
      <header className={h.header}>
        <div className={h.container}>
          <div className={h.title}>
            <NavLink to="/main" activeClassName={h.active_main}>
              MY SOFA | диваны и кресла
            </NavLink>
          </div>
          <div className={h.nav}>
            <nav>
              <ul className={h.ul}>
                <li className={h.catalog}>
                  <NavLink to="/catalog" activeClassName={h.active_catalog}>
                    Каталог
                  </NavLink>
                </li>
                <li className={h.aproject}>О проекте</li>
                <li className={h.contacts}>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={h.icons}></div>
          <div className={h.shopcart}>
            <NavLink to="/shopcart" activeClassName={h.active_shopcart}>
              Корзина
            </NavLink>
          </div>
          <div className={h.connection}>
            <div className={h.tel}> 8-800-555-35-35</div>
            <div className={h.call}>Контактный телефон</div>
          </div>
        </div>
      </header>
    </div>
  );
};
//Need delete style from link..
export default Header;
