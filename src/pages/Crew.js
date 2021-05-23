import { useContext } from "react";
import CrewMember from "../components/CrewMember";
import Page from "../components/Page";
import { SaveContext } from "../context/SaveContext";

const Crew = () => {
  const {
    gameData: { ships },
  } = useContext(SaveContext);

  let characters = [];

  ships.forEach((ship) => {
    characters = characters.concat(ship.characters);
  });

  console.log(characters);

  return (
    <Page>
      {characters.map(
        (char) =>
          char?._attributes?.name && (
            <CrewMember
              key={char._attributes.name}
              name={char._attributes.name}
              inSuit={char._attributes?.is}
              gender={char._attributes.bs || char._attributes.bh}
              conditions={char.pers.conditions.c}
            />
          ),
      )}
    </Page>
  );
};

export default Crew;
