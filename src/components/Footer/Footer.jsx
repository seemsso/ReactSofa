import { NavLink } from "react-router-dom";
import f from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={f.container}>
      <header className={f.header}>
        <div className={f.container}>
          <NavLink to="/main" className={f.active_main}>
            MY SOFA | диваны и кресла
          </NavLink>
          <div className={f.nav}>
            <nav>
              <ul className={f.ul}>
                <li className={f.catalog}>
                  <NavLink to="/catalog" activeClassName={f.active_catalog}>
                    Каталог
                  </NavLink>
                </li>
                <li>О проекте</li>
                <li>
                  <NavLink to="/shopcart" activeClassName={f.active_shopcart}>
                    Доставка
                  </NavLink>
                </li>
                <li>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={f.icons}></div>
          <div className={f.connection}>
            <div className={f.tel}> 8-800-555-35-35</div>
            <div className={f.call}>Контактный телефон</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
