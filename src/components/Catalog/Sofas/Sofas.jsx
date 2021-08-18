import ImgSofas from "./ImgSofas/ImgSofas";

import sof from "./Sofas.module.scss";

const arrSofas = [
  { src: "images/sofa1.webp", alt: "Диван Broad", price: 25999 },
  { src: "images/sofa2.webp", alt: "Диван Compact", price: 18999 },
  { src: "images/sofa3.webp", alt: "Диван Leather", price: 28999 },
  { src: "images/sofa4.webp", alt: "Диван Angular", price: 26999 },
];

const Sofas = () => {
  return (
    <div className={sof.cont_sofa}>
      {arrSofas.map((obj) => (
        <ImgSofas src={obj.src} alt={obj.alt} price={obj.price}></ImgSofas>
      ))}
    </div>
  );
};

export default Sofas;
