import ImgChairs from "../../Catalog/Chairs/ImgChairs/ImgChairs";
import ImgSofas from "../../Catalog/Sofas/ImgSofas/ImgSofas";
import disc from "./Discount.module.scss";

const Discount = () => {
  return (
    <div>
      <h3 className={disc.discounts}>Предложения со скидкой!</h3>
      <div className={disc.container3}>
        <div>
          <ImgChairs
            src={"images/chair7sale.webp"}
            alt={"Rotating Beige"}
            price={Math.trunc(1199 * 0.7)}
          ></ImgChairs>
        </div>
        <div className={disc.sofa_discounts}>
          <ImgSofas
            src={"images/sofa4sale.webp"}
            alt={"Angular"}
            price={Math.trunc(26999 * 0.7)}
          ></ImgSofas>
        </div>
      </div>
    </div>
  );
};

export default Discount;
