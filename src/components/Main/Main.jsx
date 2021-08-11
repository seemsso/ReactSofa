import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Catalog from "../Catalog/Catalog";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";

import m from "./Main.module.scss";

const Main = () => {
  return (
    <BrowserRouter>
      <div className={m.container}>
        <Header class="_iconphone"></Header>
        <div className={m.wrapper}>
          <Route exact path="/" component={Profile} />
          <Route path="/main" component={Profile} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/shopcart" component={ShoppingCart} />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};
export default Main;
