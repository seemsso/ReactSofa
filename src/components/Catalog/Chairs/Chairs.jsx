import ImgChairs from "./ImgChairs/ImgChairs";

import ch from "./Chairs.module.scss";

const Chairs = () => {
  return (
    <div className={ch.cont_chairs}>
      <div className={ch.section}>
        <ImgChairs
          src={"images/chairfirst.webp"}
          alt={"Кресло Purple"}
          price={899}
        ></ImgChairs>
        <ImgChairs
          src={"images/chairsecond.webp"}
          alt={"Кресло Spacious"}
          price={1699}
        ></ImgChairs>
        <ImgChairs
          src={"images/chairthird.webp"}
          alt={"Кресло Beige"}
          price={1399}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair4.webp"}
          alt={"Кресло Antique"}
          price={2299}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair5.webp"}
          alt={"Кресло Simpledark"}
          price={599}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair6.webp"}
          alt={"Кресло Pink"}
          price={1999}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair7.webp"}
          alt={"Кресло Rotating Beige"}
          price={1199}
        ></ImgChairs>
        <ImgChairs
          src={"images/chair8.webp"}
          alt={"Кресло Dark"}
          price={1299}
        ></ImgChairs>
      </div>
    </div>
  );
};

export default Chairs;
