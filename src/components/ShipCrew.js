import Card from "./Card";
import Heading from "./Heading";
import CrewMember from "./CrewMember";

import styles from "./shipcrew.module.css";

const ShipCrew = ({ ship }) => {
  return (
    <Card key={ship.id}>
      <Heading level={3}>{ship.name}</Heading>
      <div className={styles.wrapper}>
        {ship.characters?.map(
          (char) =>
            char?._attributes?.name && (
              <CrewMember
                key={char._attributes.entId}
                name={char._attributes.name}
                inSuit={char._attributes?.is}
                shipId={ship.id}
                gender={char._attributes.bs || char._attributes.bh}
                conditions={char.pers.conditions.c}
              />
            ),
        )}
      </div>
    </Card>
  );
};

export default ShipCrew;
