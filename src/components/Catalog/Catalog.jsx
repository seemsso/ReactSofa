import { NavLink } from "react-router-dom";
import c from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div className={c.catalog}>
      <main>
        <h2 className={c.h2}>Каталог</h2>
        <figure className={c.quote}>
          <blockquote>
            <p className={c.quote_p}>
              Купи себе диван, и на два года ты полностью удовлетворен: не
              важно, что что-то идет не так, по крайней мере, ты решил вопрос с
              диваном.
            </p>
          </blockquote>
          <figcaption className={c.caption}>
            Паланик, Чак <cite>Бойцовский клуб</cite>
          </figcaption>
        </figure>
        <div className={c.container}>
          <nav className={c.nav}>
            <span>
              <NavLink to="/catalog/sofas" activeClassName={c.sofas}>
                Диваны
              </NavLink>
            </span>
            <span>
              <NavLink to="/catalog/chairs" activeClassName={c.chairs}>
                Кресла
              </NavLink>
            </span>
            <ul>
              <li>Все</li>
              <li>Ткань</li>
              <li>Кожа</li>
              <li>Угловой</li>
              <li>Прямой</li>
            </ul>
          </nav>
          <div className={c.section}>
            <div>
              <img
                height={435}
                width={555}
                src="images/sofa1.webp"
                alt="Диван Broad"
              ></img>
              <span>Диван Broad</span>
            </div>
            <div>
              <img
                height={435}
                width={555}
                src="images/sofa2.webp"
                alt="Диван Compact"
              ></img>
              <span>Диван Compact</span>
            </div>
            <div>
              <img
                height={435}
                width={555}
                src="images/sofa3.webp"
                alt="Диван Leather"
              ></img>
              <span>Диван Leather</span>
            </div>
            <div>
              <img
                height={435}
                width={555}
                src="images/sofa4.webp"
                alt="Диван Angular"
              ></img>
              <span>Диван Angular</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Catalog;
