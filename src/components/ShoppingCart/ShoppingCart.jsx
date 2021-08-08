import shop from "./ShoppingCart.module.scss";

const cartColumn = () => {
  return (
    <div>
      <img
        height={435}
        width={320}
        src="images/chair5.webp"
        alt="Кресло Simpledark"
      ></img>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div className={shop.cart}>
      <h2 className={shop.h2}>Корзина</h2>
      <div className={shop.list}>
        <ul className={shop.ul}>
          <li>Название</li>
          <li>Цена</li>
          <li>Количество</li>
          <li>Итог</li>
        </ul>
      </div>
      <div className={shop.grid}>
        <div>
          <img
            height={435}
            width={555}
            src="images/sofa1.webp"
            alt="Диван Broad"
          ></img>
        </div>
        <div>
          <p>Диван Broad</p>
        </div>
        <div>
          <p>Цена</p>
        </div>
        <div>
          <p>Счетчик +-</p>
        </div>
        <p>Итог цена</p>
      </div>
      {cartColumn()}
    </div>
  );
};
export default ShoppingCart;
