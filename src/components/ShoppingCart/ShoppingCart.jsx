import Card from "./Card/Card";
import shop from "./ShoppingCart.module.scss";

const ShoppingCart = () => {
  return (
    <div className={shop.cart}>
      <h2 className={shop.h2}>Корзина</h2>
      <div className={shop.items}>
        <Card></Card>
      </div>
    </div>
  );
};
export default ShoppingCart;
