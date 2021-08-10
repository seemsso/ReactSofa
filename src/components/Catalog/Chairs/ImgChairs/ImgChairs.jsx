const ImgChairs = (props) => {
  return (
    <div>
      <base href="/"></base>
      <div>
        <img height={435} width={320} src={props.src} alt={props.alt}></img>
        <span>{props.alt}</span>
      </div>
    </div>
  );
};

export default ImgChairs;
