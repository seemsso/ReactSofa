import prof from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <main className={prof.container}>
        <section className={prof.section1}>Section1</section>
        <section className={prof.section2}>Section2</section>
        <section className={prof.section3}>Section3</section>
        <section className={prof.section4}>Section4</section>
      </main>
    </div>
  );
};

export default Profile;
