import ImgSofas from "./../../Catalog/Sofas/ImgSofas/ImgSofas";

import scard from "./Card.module.scss";

const Card = () => {
  return (
    <div className={scard.card}>
      <div className={scard.img}>
        <ImgSofas src={"images/sofa1.webp"} alt={""}></ImgSofas>
      </div>
      <div className={scard.prmtrs}>
        <div>
          <p>Диван Broad</p>
        </div>
        <div>
          <p>Счетчик +-</p>
        </div>
        <div>
          <p>цена:</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
