interface Position {
  x: number;
  y: number;
}

interface Stats {
  health?: number;
  food?: number;
  rest?: number;
  comfort?: number;
  oxygen?: number;
  mood?: number;
  temperature?: number;
  co2?: number;
  smoke?: number;
  hazardousGas?: number;
  social?: number;
  safety?: number;
}

interface Attribute {
  id: number;
  points: number;
}

interface Condition {
  id: number;
  level: number;
}

const getVal = (data: any, key: string): number => data.props?.[key]?._attributes?.v;

class Character {
  #characterData: any;

  readonly id: number;
  position: Position;
  side: string;
  stats: Stats;
  attributes: Attribute[];
  traits: number[];
  conditions: Condition[];

  constructor(characterData: any) {
    this.#characterData = characterData;

    this.id = characterData._attributes.id;
    this.position = {
      x: characterData._attributes.x,
      y: characterData._attributes.y,
    };
    this.side = characterData._attributes.side;
    this.stats = {
      health: getVal(characterData, "Health"),
      food: getVal(characterData, "Food"),
      rest: getVal(characterData, "Rest"),
      comfort: getVal(characterData, "Comfort"),
      oxygen: getVal(characterData, "Oxygen"),
      mood: getVal(characterData, "Mood"),
      temperature: getVal(characterData, "Temperature"),
      co2: getVal(characterData, "Co2Gas"),
      smoke: getVal(characterData, "SmokeGas"),
      hazardousGas: getVal(characterData, "HazardousGas"),
      social: getVal(characterData, "Social"),
      safety: getVal(characterData, "Safety"),
    };
    this.attributes = characterData.pers.attr.a.map(
      ({ _attributes: { points, id } }) => ({ points, id }),
    );
    this.traits = characterData.pers.traits.t.map(
      ({ _attributes: { id } }) => id,
    );
    this.conditions = characterData.pers.conditions.c.map(
      ({ _attributes: { id, level } }) => ({ id, level }),
    );
  }

  toJSON() {
    return this.#characterData;
  }
}

export default Character;
