import m from "./Main.module.scss";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Catalog from "../Catalog/Catalog";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <div className={m.container}>
        <Header></Header>
        <div className={m.wrapper}>
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
