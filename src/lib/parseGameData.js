const parseGameData = (data) => {
  if (!data?.game?.ships) {
    return null;
  }

  const {
    game: { ships, crafts, research, playerBank },
  } = data;
  const output = {};

  if (ships?.ship) {
    output.ships = ships.ship.map((ship) => {
      const shipObject = {};
      shipObject.name = ship._attributes.sname;
      shipObject.id = ship._attributes.sid;
      shipObject.tiles = ship.e;
      shipObject.characters = ship.characters?.c || [];
      // shipObject.monsters = ship.characters?.c || [];
      // shipObject.robots = ship.characters?.c || [];

      return shipObject;
    });
  }

  if (crafts?.c) {
    output.crafts = crafts.c.map((craft) => {
      const craftObject = {};

      craftObject.id = craft._attributes.id;
      craftObject.name = craft._attributes.cname || null;
      craftObject.characters = craft.characters?.c || [];
      // craftObject.robots = craft.characters?.c || [];

      return craftObject;
    });
  }

  if (research?.states?.l) {
    const states = {};

    research.states.l.forEach(state => {
      states[state._attributes.techId] = state;
    });

    output.research = {
      states,
      tree: research._attributes?.treeId,
      active: research._attributes?.activeResearchId,
    };
  }

  output.bank = { credits: playerBank?._attributes?.ca };

  return output;
};

export default parseGameData;
