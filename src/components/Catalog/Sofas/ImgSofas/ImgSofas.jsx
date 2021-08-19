import sofach from "./ImgSofas.module.scss";

const ImgSofas = ({ src, alt, price }) => {
  return (
    <div className={sofach.container}>
      <base href="/"></base>
      <div>
        <img height={435} width={555} src={src} alt={alt}></img>
        <div className={sofach.footer}>
          <div>
            <div className={sofach.name}>{alt}</div>
            <button className={sofach.fav}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </button>
          </div>
          <div className={sofach.right}>
            <div>
              <span price={price} className={sofach.price}>
                {price}
              </span>
              <span>₽</span>
            </div>
            <button className={sofach.cartadd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSofas;
