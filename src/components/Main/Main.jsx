import m from "./Main.module.scss";
import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={m.container}>
      <Header className={m.header}></Header>

      <Profile className={m.profile}></Profile>
      <Footer className={m.footer}></Footer>
    </div>
  );
};
export default Main;
