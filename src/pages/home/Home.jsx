import { useState } from "react";
import CardList from "../cardList/CardList";
import styles from "./Home.module.scss";
import { allDatas } from "../../mock";

import logo from "../../assets/logo.svg";

const Home = () => {
  const [cards, setCards] = useState(allDatas.slice(0, 8));

  const [showAll, setShowAll] = useState(true);
  const [selectedPort, setSelectedPort] = useState("");

  const handlePortChange = (event) => {
    setSelectedPort(event.target.value);
  };

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const filterData = showAll
    ? cards
    : allDatas.filter((item) => item.departure.Port === selectedPort);

  const randomList = allDatas.sort(() => 0.5 - Math.random()).slice(0, 8);

  const handleLoadMore = () => {
    const startIndex = cards.length;
    const endIndex = startIndex + 8;

    setCards((prevCards) => [
      ...prevCards,
      ...allDatas.slice(startIndex, endIndex),
    ]);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.Home__header}>
        <img className={styles.Home__logo} src={logo} alt="logo" />
      </div>
      <div className={styles.Home__heroContain}>
        <h3 className={styles.Home__info}>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className={styles.Home__selectContain}>
        <select
          className={styles.Home__select}
          onChange={toggleShowAll}
          value={showAll ? "all" : "grouped"}
        >
          <option value="all">Mostra Tutti</option>
          <option value="grouped">Mostra per porto di partenza</option>
        </select>
        {!showAll && (
          <select
            className={styles.Home__select}
            onChange={handlePortChange}
            value={selectedPort}
          >
            <option value="">Seleziona un porto</option>
            <option value="Favignana">Favignana</option>
            <option value="Lipari">Lipari</option>
            <option value="Palermo">Palermo</option>
            <option value="San Vito lo Capo">San Vito lo Capo</option>
            <option value="Marsala">Marsala</option>
            <option value="Lampedusa">Lampedusa</option>
            <option value="Pantelleria">Pantelleria</option>
            <option value="Salina">Salina</option>
          </select>
        )}
      </div>
      <CardList cards={filterData} />

      <div className={styles.Home__btnContain}>
        {cards.length < allDatas.length && (
          <button className={styles.Home__button} onClick={handleLoadMore}>
            Mostra altri
          </button>
        )}
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
      <h3 className={styles.Home__casualFilter}>Avventure da scoprire</h3>
      <CardList cards={randomList} />
      <footer className={styles.Home__footer}></footer>
    </div>
  );
};

export default Home;
