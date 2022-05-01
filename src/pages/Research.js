import { useContext, useState, useEffect } from "react";
import { useWorker } from "@koale/useworker";
import Heading from "../components/Heading";
import Page from "../components/Page";
import ResearchItem from "../components/ResearchItem";
import { SaveContext } from "../context/SaveContext";
import { default as researchInfo } from "../data/research";
import partitionResearch from "../lib/partitionResearch";

const Research = () => {
  const {
    gameData: { research },
  } = useContext(SaveContext);
  const [partitions, setPartitions] = useState(null);
  const [partitionWorker] = useWorker(partitionResearch);

  const activeId = research.active;

  useEffect(() => {
    if (research.states) {
      const runPartition = async () => {
        setPartitions(await partitionWorker(research.states, researchInfo));
      };
      runPartition();
    }
  }, [partitionWorker, research.states]);

  return (
    <Page>
      <Heading level={2}>Research</Heading>
      <div>
        <Heading level={3}>Active</Heading>
        Active research:
        {researchInfo[research.tree]?.[activeId]?.name || "None"}
      </div>
      <div>
        <Heading level={3}>Unfinished</Heading>
        {partitions?.rest ? (
          partitions.rest.map((state, i) => (
            <ResearchItem
              key={state._attributes.techId}
              current={activeId === state._attributes.techId}
              tree={research.tree}
              index={i}
              item={state}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <div>
        <Heading level={3}>Finished</Heading>
        {partitions?.finished ? (
          partitions.finished.map((state, i) => (
            <ResearchItem
              key={state._attributes.techId}
              current={activeId === state._attributes.techId}
              finished={true}
              tree={research.tree}
              index={i}
              item={state}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </Page>
  );
};

export default Research;
