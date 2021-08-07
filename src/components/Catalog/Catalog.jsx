import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Sofas from "./Sofas/Sofas";
import Chairs from "./Chairs/Chairs";

import c from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <BrowserRouter>
      <div className={c.catalog}>
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
          <Navigation></Navigation>
          <Route exact path="/catalog" component={Sofas} />
          <Route exact path="/catalog/sofas" component={Sofas} />
          <Route exact path="/catalog/chairs" component={Chairs} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Catalog;
