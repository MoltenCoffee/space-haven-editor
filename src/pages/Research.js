import { useContext } from "react";
import Page from "../components/Page";
import ResearchItem from "../components/ResearchItem";
import { SaveContext } from "../context/SaveContext";
import { default as researchInfo } from "../data/research";

const Research = () => {
  const {
    gameData: { research },
  } = useContext(SaveContext);

  const states = research.states;
  const activeId = research.active;

  return (
    <Page>
      <div>
        Active research:
        {researchInfo[research.tree]?.[activeId]?.name || "None"}
      </div>
      <div>
        {states &&
          Object.keys(states).map((state) => (
            <ResearchItem
              key={states[state]._attributes.techId}
              current={activeId}
              tree={research.tree}
              item={states[state]}
            />
          ))}
      </div>
    </Page>
  );
};

export default Research;
