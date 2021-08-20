import ImgSofas from "./../../Catalog/Sofas/ImgSofas/ImgSofas";

import scard from "./Card.module.scss";

const Card = ({ src, alt, price }) => {
  return (
    <div className={scard.card}>
      <div className={scard.img}>
        <ImgSofas src={src} alt={alt} price={price}></ImgSofas>
      </div>
      <div className={scard.prmtrs}>
        <div className={scard.score}>
          <img src="images/icons/minus.svg" alt="-1" />
        </div>
        <div>
          <img src="images/icons/plus.svg" alt="+1" />
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
