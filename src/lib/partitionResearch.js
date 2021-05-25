const partitionResearch = (researchArray, researchDetails) => {
  if (!Array.isArray(researchArray)) {
    throw new TypeError("An array must be provided");
  }

  const isFinished = (item) => {
    return (
      researchDetails[2535][item._attributes.techId]?.req?.total <=
      parseInt(item.blocksDone._attributes.level1, 10) +
        parseInt(item.blocksDone._attributes.level2, 10) +
        parseInt(item.blocksDone._attributes.level3, 10)
    );
  };

  return researchArray.reduce(
    (result, element) => {
      isFinished(element)
        ? result.finished.push(element)
        : result.rest.push(element);

      return result;
    },
    { finished: [], rest: [] },
  );
};

export default partitionResearch;
