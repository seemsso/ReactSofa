import sof from "./Sofas.module.scss";

const Sofas = (props) => {
  return (
    <div className={sof.cont_sofa}>
      <div>
        <base href="/"></base>
        <img
          height={435}
          width={555}
          src="images/sofa1.webp"
          alt="Диван Broad"
        ></img>
        <span>Диван Broad</span>
      </div>
      <div>
        <img
          height={435}
          width={555}
          src="images/sofa2.webp"
          alt="Диван Compact"
        ></img>
        <span>Диван Compact</span>
      </div>
      <div>
        <img
          height={435}
          width={555}
          src="images/sofa3.webp"
          alt="Диван Leather"
        ></img>
        <span>Диван Leather</span>
      </div>
      <div>
        <img
          height={435}
          width={555}
          src="images/sofa4.webp"
          alt="Диван Angular"
        ></img>
        <span>Диван Angular</span>
      </div>
    </div>
  );
};

export default Sofas;
