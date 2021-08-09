import { NavLink } from "react-router-dom";

import button from "./GoToCatalog.module.scss";

const GoToCatalog = () => {
  return (
    <div className={button.text}>
      <NavLink to="/catalog" activeClassName={button.active_catalog}>
        Перейти в каталог товаров
      </NavLink>
    </div>
  );
};

export default GoToCatalog;
