import f from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={f.container}>
      <nav className={f.nav}>
        <ul className={f.list}>
          <li className="li_1">1</li>
          <li className="li_2">2</li>
          <li className="li_3">3</li>
          <li className="li_4">4</li>
          <li className="li_5">5</li>
        </ul>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        dolores odit ipsa doloremque quos magnam asperiores obcaecati commodi
        dolorum recusandae, id laboriosam laborum. Beatae, aspernatur. Deserunt
        autem ex iure eum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aliquid molestias harum dolorum provident odit hic blanditiis quas
        magni quidem vero numquam incidunt culpa adipisci accusamus, unde
        eveniet obcaecati vitae? Unde.
      </nav>
    </div>
  );
};

export default Footer;
