import ImgSofas from "./ImgSofas/ImgSofas";

import sof from "./Sofas.module.scss";

const Sofas = () => {
  return (
    <div className={sof.cont_sofa}>
      <ImgSofas
        src="images/sofa1.webp"
        alt="Диван Broad"
        price={25999}
      ></ImgSofas>
      <ImgSofas
        src="images/sofa2.webp"
        alt="Диван Compact"
        price={18999}
      ></ImgSofas>
      <ImgSofas
        src="images/sofa3.webp"
        alt="Диван Leather"
        price={28999}
      ></ImgSofas>
      <ImgSofas
        src="images/sofa4.webp"
        alt="Диван Angular"
        price={26999}
      ></ImgSofas>
    </div>
  );
};

export default Sofas;
