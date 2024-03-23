import data from "./mockDb.json";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.cardContainer} data-testid={"Card-container"}>
      {data.map((entry) => {
        return (
          <div key={entry.id}>
            <p>{entry.first_name}</p>
            <p>{entry.last_name}</p>
            <p>{entry.email}</p>
            <p>{entry.gender}</p>
          </div>
        );
      })}
    </div>
  );
};

Card.displayName = "comp-Card";
export default Card;
