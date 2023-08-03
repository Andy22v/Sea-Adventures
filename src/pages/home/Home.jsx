import styles from "./Home.module.scss";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__navbar}>
        <img className={styles.Home__logo} src={logo} alt="logo" />
      </div>
      <div className={styles.Home__heroContain}>
        <h3 className={styles.Home__info}>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className={styles.Home__banner}>
        <div className={styles.Home__descriptionContain}>
          <div className={styles.Home__description}>
            <h3>+20</h3>
            <h3>Destinazioni</h3>
          </div>
          <div className={styles.Home__description}>
            <h3>+15</h3>
            <h3>Imbarcazioni</h3>
          </div>
          <div className={styles.Home__description}>
            <h3>+40</h3>
            <h3>Itinerari</h3>
          </div>
        </div>
      </div>
      <footer className={styles.Home__footer}></footer>
    </div>
  );
};

export default Home;
