import { Link } from "react-router-dom";

import n from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={n.nav}>
      <div className={n.sticky}>
        <div className={n.tab}>
          <div className={n.sofa}>
            <Link to="/catalog/sofas">Диваны</Link>
          </div>
          <div className={n.ch}>
            <Link to="/catalog/chairs">Кресла</Link>
          </div>
        </div>
        <ul>
          <li>Все</li>
          <li>Ткань</li>
          <li>Кожа</li>
          <li>Угловой</li>
          <li>Прямой</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
