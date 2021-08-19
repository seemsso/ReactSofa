import imgch from "./ImgChairs.module.scss";

const ImgChairs = ({ src, alt, price, onFavorite, onCartAdd }) => {
  return (
    <div className={imgch.container}>
      <base href="/"></base>
      <div>
        <img height={435} width={320} src={src} alt={alt}></img>
        <div className={imgch.footer}>
          <div>
            <div className={imgch.name}>{alt}</div>
            <button className={imgch.fav} onClick={onFavorite}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </button>
          </div>
          <div className={imgch.right}>
            <div>
              <span price={price} className={imgch.price}>
                {price}
              </span>
              <span>₽</span>
            </div>
            <button className={imgch.cartadd} onClick={onCartAdd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgChairs;
