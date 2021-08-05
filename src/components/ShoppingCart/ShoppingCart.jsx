import shop from "./ShoppingCart.module.scss";

const ShoppingCart = (props) => {
  return (
    <div className={shop.cart}>
      <h2 className={shop.h2}>Корзина</h2>
    </div>
  );
};
export default ShoppingCart;
