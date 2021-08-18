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
            <div className={sofach.fav}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </div>
          </div>
          <div className={sofach.right}>
            <div>
              <span price={price} className={sofach.price}>
                {price}
              </span>
              <span>₽</span>
            </div>
            <div className={sofach.cartadd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSofas;
