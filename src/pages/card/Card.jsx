import styles from "./Card.module.scss";

const Card = ({ data }) => {
  const departureDate = data.departureDate;
  const arrivalDate = data.arrivalDate;

  const [dateStr, timeStr] = departureDate.split(" ");
  const [strDate, strTime] = arrivalDate.split(" ");

  const [hour, minutes] = timeStr.split(":");
  const [ora, minuti] = strTime.split(":");

  const formattedTime = `${hour.padStart(2, "0")}:${minutes}`;

  const timeFormat = `${ora.padStart(2, "0")}:${minuti}`;

  return (
    <div className={styles.Card}>
      <div className={styles.Card__priceInfo}>
        <h3>{data.budget.value}</h3>
        <h3>{data.budget.currencyCode}</h3>
        <p>{data.budget.costType}</p>
      </div>
      <div className={styles.Card__nameContain}>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.Card__partenzaContain}>
        <div className={styles.Card__Partenza}>
          <p className={styles.Card__partenzaParag}>PARTENZA DA</p>
          <p>{data.departure.Port}</p>
        </div>
        <div className={styles.Card__barca}>
          <p>{data.boatType}</p>
          <p>{data.numberOfDays} giorni</p>
        </div>
      </div>

      <div className={styles.Card__infoOrari}>
        <div className={styles.Card__departure}>
          <p>{dateStr}</p>
          <p className={styles.Card__azulColor}>{formattedTime}</p>
        </div>
        <div className={styles.Card__arrival}>
          <p>{strDate}</p>
          <p className={styles.Card__azulColor}>{timeFormat}</p>
        </div>
      </div>
      <div className={styles.Card__infoCabine}>
        <div className={styles.Card__reservation}>
          <p>{data.reservations}</p>
          <p>{data.reservationsType}</p>
        </div>
        <div className={styles.Card__available}>
          <p className={styles.Card__azulColor}>Disponibilità </p>
          <p>{data.reservationsAvailable}</p>
        </div>
      </div>
      <div className={styles.Card__btnContain}>
        <button className={styles.Card__button}>PRENOTA</button>
      </div>
    </div>
  );
};

export default Card;
