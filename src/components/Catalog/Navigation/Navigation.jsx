import { Link } from "react-router-dom";
import n from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={n.nav}>
      <span>
        <Link to="/catalog/sofas">Диваны</Link>
      </span>
      <span>
        <Link to="/catalog/chairs">Кресла</Link>
      </span>
      <ul>
        <li>Все</li>
        <li>Ткань</li>
        <li>Кожа</li>
        <li>Угловой</li>
        <li>Прямой</li>
      </ul>
    </nav>
  );
};

export default Navigation;
