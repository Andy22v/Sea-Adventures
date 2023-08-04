import Card from "../card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ cards }) => {
  return (
    <div className={styles.CardList}>
      <ul className={styles.CardList__list}>
        {cards?.map((data) => (
          <li key={data.id}>
            <Card data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
