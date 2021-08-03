import prof from "./Profile.module.scss";
import GoToCatalog from "./GoToCatalog/GoToCatalog";

const Profile = () => {
  return (
    <main className={prof.main}>
      <div>
        <h3 className={prof.h3_container1}>Самые популярные товары</h3>
      </div>
      <div className={prof.container1}>
        <div className={prof.chair1}>
          <img
            height={564}
            widght={400}
            src="images/chair1.webp"
            alt="chair Purple"
          ></img>
          <div>Кресло Purple</div>
        </div>
        <div className={prof.chair2}>
          <img
            height={564}
            widght={400}
            src="images/chair2.webp"
            alt="chair Spacious"
          ></img>
          <div>Кресло Spacious</div>
        </div>
        <div className={prof.chair3}>
          <img
            height={564}
            widght={400}
            src="images/chair3.webp"
            alt="chair Beige"
          ></img>
          <div>Кресло Beige </div>
        </div>
        <div className={prof.sofa1}>
          <img
            height={613}
            widght={1240}
            src="images/sofa1.webp"
            alt="sofa Broad"
          ></img>
          <div>Кресло Broad </div>
        </div>
      </div>
      <div>
        <GoToCatalog></GoToCatalog>
      </div>
      <div className={prof.container2}>
        <div className={prof.sofa_img}>
          <img
            height={435}
            widght={784}
            src="images/sofa_fun.webp"
            alt="Sofa with plush froggy"
          />
        </div>
        <div className={prof.message}>
          <h3>О проекте</h3>
          <p>Данный проект сделан исключительно в образовательных целях.</p>
          <p>Если у Вас остались вопросы,свяжитесь со мной</p>
          <div className={prof.button}>Мои данные</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
