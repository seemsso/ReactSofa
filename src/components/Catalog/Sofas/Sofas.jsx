import ImgSofas from "./ImgSofas/ImgSofas";

import sof from "./Sofas.module.scss";

const Sofas = (props) => {
  return (
    <div className={sof.cont_sofa}>
      <ImgSofas src="images/sofa1.webp" alt="Диван Broad"></ImgSofas>
      <ImgSofas src="images/sofa2.webp" alt="Диван Compact"></ImgSofas>
      <ImgSofas src="images/sofa3.webp" alt="Диван Leather"></ImgSofas>
      <ImgSofas src="images/sofa4.webp" alt="Диван Angular"></ImgSofas>
    </div>
  );
};

export default Sofas;
