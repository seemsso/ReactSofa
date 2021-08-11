import Popular from "./Popular/Popular";
import GoToCatalog from "./GoToCatalog/GoToCatalog";
import AboutProj from "./AboutProj/AboutProj";
import Discount from "./Discount/Discount";

import prof from "./Profile.module.scss";

const Profile = () => {
  return (
    <main className={prof.main}>
      <Popular></Popular>
      <div>
        <GoToCatalog></GoToCatalog>
      </div>
      <AboutProj></AboutProj>
      <Discount></Discount>
    </main>
  );
};

export default Profile;
