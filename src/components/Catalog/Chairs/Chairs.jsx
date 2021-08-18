import ImgChairs from "./ImgChairs/ImgChairs";

import ch from "./Chairs.module.scss";

const arrChairs = [
  { src: "images/chairfirst.webp", alt: "Кресло Purple", price: 899 },
  { src: "images/chairsecond.webp", alt: "Кресло Spacious", price: 1699 },
  { src: "images/chairthird.webp", alt: "Кресло Beige", price: 1399 },
  { src: "images/chair4.webp", alt: "Кресло Antique", price: 2299 },
  { src: "images/chair5.webp", alt: "Кресло Simpledark", price: 599 },
  { src: "images/chair6.webp", alt: "Кресло Pink", price: 1999 },
  { src: "images/chair7.webp", alt: "Кресло Rotating Beige", price: 1199 },
  { src: "images/chair8.webp", alt: "Кресло Dark", price: 1299 },
];

const Chairs = () => {
  return (
    <div className={ch.cont_chairs}>
      <div className={ch.section}>
        {arrChairs.map((obj) => (
          <ImgChairs src={obj.src} alt={obj.alt} price={obj.price}></ImgChairs>
        ))}
      </div>
    </div>
  );
};

export default Chairs;
