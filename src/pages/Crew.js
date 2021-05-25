import { useContext } from "react";
import Page from "../components/Page";
import Heading from "../components/Heading";
import { SaveContext } from "../context/SaveContext";
import ShipCrew from "../components/ShipCrew";

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
        <ShipCrew key={ship.id} ship={ship} />
      ))}
    </Page>
  );
};

export default Crew;
