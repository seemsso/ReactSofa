import sofach from "./ImgSofas.module.scss";

const ImgSofas = (props) => {
  return (
    <div className={sofach.container}>
      <base href="/"></base>
      <div>
        <img height={435} width={555} src={props.src} alt={props.alt}></img>
        <div className={sofach.footer}>
          <div>
            <div className={sofach.name}>{props.alt}</div>
            <div className={sofach.fav}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </div>
          </div>
          <div className={sofach.right}>
            <div>
              <span className={sofach.price}>1199</span>
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
