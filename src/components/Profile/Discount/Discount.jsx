import disc from "./Discount.module.scss";
const Discount = () => {
  return (
    <div>
      <h3 className={disc.discounts}>Предложения со скидкой!</h3>
      <div className={disc.container3}>
        <div className={disc.chair_discounts}>
          <img
            height={435}
            widght={320}
            src="images/chair7sale.webp"
            alt="chair Rotating Beige"
          ></img>
          <div>
            <span>Кресло Rotating Beige</span>
          </div>
        </div>
        <div className={disc.sofa_discounts}>
          <img
            className={disc.sale_img}
            height={435}
            widght={555}
            src="images/sofa4sale.webp"
            alt="sofa Angular"
          ></img>
          <div>
            <span>Диван Angular</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
