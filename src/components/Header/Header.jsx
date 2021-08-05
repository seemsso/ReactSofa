import { Link } from "react-router-dom";
import h from "./Header.module.scss";
// import c from "../Catalog/Catalog"

const Header = () => {
  return (
    <div className={h}>
      <header className={h.header}>
        <div className={h.container}>
          <div className={h.title}>
            <Link to="/main"> MY SOFA | диваны и кресла </Link>
          </div>
          <div className={h.nav}>
            <nav>
              <ul className={h.ul}>
                <li className={h.catalog}>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li className={h.aproject}>О проекте</li>
                <li className={h.contacts}>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={h.icons}></div>
          <div>
            <Link to="/shopcart"> Корзина</Link>
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
