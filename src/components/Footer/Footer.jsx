import f from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={f.container}>
      <header className={f.header}>
        <div className={f.container}>
          <div className={f.title}>MY SOFA | диваны и кресла</div>
          <div className={f.nav}>
            <nav>
              <ul className={f.ul}>
                <li>Каталог</li>
                <li>О проекте</li>
                <li>Доставка</li>
                <li>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={f.icons}></div>
          <div className={f.connection}>
            <div className={f.tel}> 8-800-555-35-35</div>
            <div className={f.call}>Контактный телефон</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
