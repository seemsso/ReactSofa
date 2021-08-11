import Popular from "./Popular/Popular";
import GoToCatalog from "./GoToCatalog/GoToCatalog";
import AboutProj from "./AboutProj/AboutProj";

import prof from "./Profile.module.scss";

const Profile = () => {
  return (
    <main className={prof.main}>
      <Popular></Popular>
      <div>
        <GoToCatalog></GoToCatalog>
      </div>
      <AboutProj></AboutProj>
      <h3 className={prof.discounts}>Предложения со скидкой!</h3>
      <div className={prof.container3}>
        <div className={prof.chair_discounts}>
          <img
            height={435}
            widght={320}
            src="images/chair7.webp"
            alt="chair Rotating Beige"
          ></img>
          <img
            height={63}
            widght={116}
            src="images/sale.jpg"
            alt="sale 30%"
          ></img>
          <div>
            <span>Кресло Rotating Beige</span>
          </div>
        </div>
        <div className={prof.sofa_discounts}>
          <img
            className={prof.sale_img}
            height={435}
            widght={555}
            src="images/sofa4.webp"
            alt="sofa Angular"
          ></img>
          <img
            className={prof.sale_img}
            height={63}
            widght={116}
            src="images/sale.jpg"
            alt="sale 30%"
          ></img>
          <div>
            <span>Диван Angular</span>{" "}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
