import h from "./Header.module.scss";

const Header = () => {
  return (
    <div className={h}>
      <header className={h.header}>
        <div className={h.container}>
          <div className={h.title}>MY SOFA | диваны и кресла</div>
          <div className={h.nav}>
            <nav>
              <ul className={h.ul}>
                <li>Каталог</li>
                <li>О проекте</li>
                <li>Доставка</li>
                <li>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={h.icons}></div>
          <div className={h.connection}>
            <div className={h.tel}> 8-800-555-35-35</div>
            <div className={h.call}>Контактный телефон</div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
