import pop from "./Popular.module.scss";

const PopImg = (props) => {
  return (
    <div>
      <img height={564} widght={400} src={props.src} alt={props.alt}></img>
      <div>
        <span>{props.alt}</span>
      </div>
    </div>
  );
};
const Popular = () => {
  return (
    <div>
      <div>
        <h3 className={pop.h3_container1}>Самые популярные товары</h3>
      </div>
      <div className={pop.container1}>
        <PopImg src={"images/chair1.webp"} alt={"Кресло Purple"}></PopImg>
        <PopImg src={"images/chair2.webp"} alt={"Кресло Spacious"}></PopImg>
        <PopImg src={"images/chair3.webp"} alt={"Кресло Beige"}></PopImg>

        <div className={pop.sofa1}>
          <img
            height={613}
            widght={1240}
            src="images/sofa1_.webp"
            alt="Диван Broad"
          ></img>
          <div>
            <span>Диван Broad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
