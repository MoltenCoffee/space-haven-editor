import { useContext } from "react";
import Page from "../components/Page";
import ResearchItem from "../components/ResearchItem";
import { SaveContext } from "../context/SaveContext";

const Research = () => {
  const { gameData } = useContext(SaveContext);

  const attrs = gameData?.research?._attributes;
  const states = gameData?.research?.states?.l;

  return (
    <Page>
      <div>Active research: {(attrs && attrs.activeResearchId) || "None"}</div>
      <div>
        {states &&
          states.map((state) => (
            <ResearchItem
              key={state._attributes.techId}
              tree={2535}
              item={state}
            />
          ))}
      </div>
    </Page>
  );
};

export default Research;
