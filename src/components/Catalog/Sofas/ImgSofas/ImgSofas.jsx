import React from "react";
import sofach from "./ImgSofas.module.scss";

const ImgSofas = ({ src, alt, price }) => {
  const [isFav, setIsFav] = React.useState(false);

  const onFavorite = () => {
    setIsFav(!isFav);
  };
  const [isAdded, setIsAdded] = React.useState(false);
  const onCartAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={sofach.container}>
      <base href="/"></base>
      <div>
        <img height={435} width={555} src={src} alt={alt}></img>
        <div className={sofach.footer}>
          <div>
            <div className={sofach.name}>{alt}</div>
            <button className={sofach.fav} onClick={onFavorite}>
              <img
                src={isFav ? "images/icons/favb.svg" : "/images/icons/fav.svg"}
                alt="fav"
              />
            </button>
          </div>
          <div className={sofach.right}>
            <div>
              <span price={price} className={sofach.price}>
                {price}
              </span>
              <span>₽</span>
            </div>
            <button className={sofach.cartadd} onClick={onCartAdd}>
              <img
                src={
                  isAdded
                    ? "images/icons/cartadded.svg"
                    : "images/icons/cartadd.svg"
                }
                alt="add"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSofas;
