import pop from "./Popular.module.scss";

const PopImg = ({ src, alt, price, onFavorite, onCartAdd }) => {
  return (
    <div className={pop.container}>
      <base href="/"></base>
      <div>
        <img height={564} width={400} src={src} alt={alt}></img>
        <div className={pop.footer}>
          <div>
            <div className={pop.name}>{alt}</div>
            <button className={pop.fav} onClick={onFavorite}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </button>
          </div>
          <div className={pop.right}>
            <div>
              <span price={price} className={pop.price}>
                {price}
              </span>
              <span>₽</span>
            </div>
            <button className={pop.cartadd} onClick={onCartAdd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </button>
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
        <PopImg
          src={"images/chair1.webp"}
          alt={"Кресло Purple"}
          price={899}
          onFavorite={() => console.log("Закладки")}
          onCartAdd={() => console.log("Корзина")}
        ></PopImg>
        <PopImg
          src={"images/chair2.webp"}
          alt={"Кресло Spacious"}
          price={1699}
          onFavorite={() => console.log("Закладки")}
          onCartAdd={() => console.log("Корзина")}
        ></PopImg>
        <PopImg
          src={"images/chair3.webp"}
          alt={"Кресло Beige"}
          price={2299}
          onFavorite={() => console.log("Закладки")}
          onCartAdd={() => console.log("Корзина")}
        ></PopImg>
        <div className={pop.sofa1}>
          <img
            height={613}
            widght={1240}
            src="images/sofa1_.webp"
            alt="Диван Broad"
            onFavorite={() => console.log("Закладки")}
            onCartAdd={() => console.log("Корзина")}
          ></img>
          <div className={pop.mainsofa}>
            <div>
              <div className={pop.name}>Диван Broad</div>
              <button className={pop.fav}>
                <img src="/images/icons/fav.svg" alt="fav" />
              </button>
            </div>
            <div className={pop.right}>
              <div>
                <span className={pop.price}>25999</span>
                <span>₽</span>
              </div>
              <button className={pop.cartadd}>
                <img src="images/icons/cartadd.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
