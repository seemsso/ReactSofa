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
            src="images/chair7.webp"
            alt="chair Rotating Beige"
          ></img>
          <img
            height={63}
            widght={116}
            src="images/sale.jpg"
            alt="sale 30%"
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
            src="images/sofa4.webp"
            alt="sofa Angular"
          ></img>
          <img
            className={disc.sale_img}
            height={63}
            widght={116}
            src="images/sale.jpg"
            alt="sale 30%"
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
