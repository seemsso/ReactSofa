import m from "./Main.module.scss";
import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={m.container}>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
};
export default Main;
