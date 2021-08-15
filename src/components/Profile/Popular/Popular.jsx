import pop from "./Popular.module.scss";

const PopImg = (props) => {
  return (
    <div className={pop.container}>
      <base href="/"></base>
      <div>
        <img height={564} width={400} src={props.src} alt={props.alt}></img>
        <div className={pop.footer}>
          <div>
            <div className={pop.name}>{props.alt}</div>
            <div className={pop.fav}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </div>
          </div>
          <div className={pop.right}>
            <div>
              <span className={pop.price}>1199</span>
              <span>₽</span>
            </div>
            <div className={pop.cartadd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </div>
          </div>
        </div>
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
          <div className={pop.mainsofa}>
            <div>
              <div className={pop.name}>Диван Broad</div>
              <div className={pop.fav}>
                <img src="/images/icons/fav.svg" alt="fav" />
              </div>
            </div>
            <div className={pop.right}>
              <div>
                <span className={pop.price}>25999</span>
                <span>₽</span>
              </div>
              <div className={pop.cartadd}>
                <img src="images/icons/cartadd.svg" alt="add" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
