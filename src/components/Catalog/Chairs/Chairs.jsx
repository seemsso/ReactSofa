import ImgChairs from "./ImgChairs/ImgChairs";

import ch from "./Chairs.module.scss";

const Chairs = () => {
  return (
    <div className={ch.cont_chairs}>
      <div className={ch.section}>
        <ImgChairs
          src={"images/chairfirst.webp"}
          alt={"Кресло Purple"}
        ></ImgChairs>
        <ImgChairs
          src={"images/chairsecond.webp"}
          alt={"Кресло Spacious"}
        ></ImgChairs>
        <ImgChairs
          src={"images/chairthird.webp"}
          alt={"Кресло Beige"}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair4.webp"}
          alt={"Кресло Antique"}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair5.webp"}
          alt={"Кресло Simpledark"}
        ></ImgChairs>
        <ImgChairs src={"images/chair6.webp"} alt={"Кресло Pink"}></ImgChairs>
        <ImgChairs
          src={"images/chair7.webp"}
          alt={"Кресло Rotating Beige"}
        ></ImgChairs>
        <ImgChairs src={"images/chair8.webp"} alt={"Кресло Dark"}></ImgChairs>
      </div>
    </div>
  );
};

export default Chairs;
