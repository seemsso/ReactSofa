import ch from "./Chairs.module.scss";

const Chairs = () => {
  return (
    <div className={ch.cont_chairs}>
      <base href="/"></base>
      <div className={ch.section}>
        <div>
          <img
            height={435}
            width={320}
            src={"images/chairfirst.webp"}
            alt="Кресло Purple"
          ></img>
          <span>Кресло Purple</span>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chairsecond.webp"
            alt="Кресло Spacious"
          ></img>
          <span>Кресло Spacious</span>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chairthird.webp"
            alt="Кресло Beige"
          ></img>
          <span>Кресло Beige</span>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chair4.webp"
            alt="Кресло Antique"
          ></img>
          <span>Кресло Antique</span>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chair5.webp"
            alt="Кресло Simpledark"
          ></img>
          <span>Кресло Simpledark</span>
          <div>
            <img
              height={435}
              width={320}
              src="images/chair6.webp"
              alt="Кресло Pink"
            ></img>
            <span>Кресло Pink</span>
          </div>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chair7.webp"
            alt="Кресло Rotating Beige"
          ></img>
          <span>Кресло Rotating Beige</span>
        </div>
        <div>
          <img
            height={435}
            width={320}
            src="images/chair8.webp"
            alt="Кресло Dark"
          ></img>
          <span>Кресло Dark</span>
        </div>
      </div>
    </div>
  );
};

export default Chairs;
