import imgch from "./ImgChairs.module.scss";

const ImgChairs = (props) => {
  return (
    <div className={imgch.container}>
      <base href="/"></base>
      <div>
        <img height={435} width={320} src={props.src} alt={props.alt}></img>
        <div className={imgch.footer}>
          <div>
            <div className={imgch.name}>{props.alt}</div>
            <div className={imgch.fav}>
              <img src="/images/icons/fav.svg" alt="fav" />
            </div>
          </div>
          <div className={imgch.right}>
            <div>
              <span className={imgch.price}>1199</span>
              <span>₽</span>
            </div>
            <div className={imgch.cartadd}>
              <img src="images/icons/cartadd.svg" alt="add" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgChairs;
