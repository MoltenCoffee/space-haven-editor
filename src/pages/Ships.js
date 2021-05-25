import { useContext } from "react";
import Page from "../components/Page";
import { SaveContext } from "../context/SaveContext";

import Ship from "../components/Ship";

const Ships = () => {
  const {
    gameData: { ships },
  } = useContext(SaveContext);

  return (
    <Page>
      {ships?.map((ship) => (
        <Ship name={ship.name} crew={ship.characters} tiles={ship.tiles} />
      ))}
    </Page>
  );
};

export default Ships;
