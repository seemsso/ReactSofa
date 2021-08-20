import abp from "./AboutProj.module.scss";

const AboutProj = () => {
  return (
    <div>
      <div className={abp.container2}>
        <div className={abp.sofa_img}>
          <img
            height={435}
            widght={784}
            src="images/sofa_fun.webp"
            alt="Диван с игрушечным лягушонком"
          />
        </div>
        <div className={abp.message}>
          <h3>О проекте</h3>
          <p>Данный проект сделан исключительно в образовательных целях.</p>
          <p>Если у Вас остались вопросы,свяжитесь со мной</p>
          <div className={abp.my_data}>Мои данные</div>
          <div>
            <a href="https://t.me/SoCoolIdea">Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProj;
