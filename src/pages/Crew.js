import { useContext } from "react";
import CrewMember from "../components/CrewMember";
import Page from "../components/Page";
import Card from "../components/Card";
import Heading from "../components/Heading";
import { SaveContext } from "../context/SaveContext";

const Crew = () => {
  const {
    gameData: { ships },
  } = useContext(SaveContext);

  return (
    <Page>
      <Heading level={2} noFont>
        Crew
      </Heading>
      {ships.map((ship) => (
        <Card>
          <Heading level={3}>{ship.name}</Heading>
          {ship?.characters?.map(
            (char) =>
              char?._attributes?.name && (
                <CrewMember
                  key={char._attributes.name}
                  name={char._attributes.name}
                  inSuit={char._attributes?.is}
                  ship={ship.name}
                  gender={char._attributes.bs || char._attributes.bh}
                  conditions={char.pers.conditions.c}
                />
              ),
          )}
        </Card>
      ))}
    </Page>
  );
};

export default Crew;
