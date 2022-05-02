import Character from "./Character";

interface Size {
  x: number;
  y: number;
}
interface ShipTile {
  x: number;
  y: number;
  shield: number;
  element: number;
}
interface RoofTile {
  x: number;
  y: number;
  colour: string;
}

class Ship {
  readonly #shipData: any;

  name: string;
  size: Size;
  roof: RoofTile[];
  tiles: ShipTile[];
  characters: Character[];

  constructor(shipData: any) {
    this.#shipData = shipData;
    this.name = this.#shipData._attributes.sname;
    this.size = {
      x: this.#shipData._attributes.sx,
      y: this.#shipData._attributes.sy,
    };
    this.roof = this.#shipData.roof.e.map((tile: any) => ({
      x: tile._attributes.x,
      y: tile._attributes.y,
      colour: tile._attributes.col,
    }));
    this.tiles = this.#shipData.e.map((tile: any) => ({
      x: tile._attributes.x,
      y: tile._attributes.y,
      shield: tile._attributes.shield,
    }));
    this.characters = this.#shipData.characters.c.map(
      (character: any) => new Character(character),
    );
  }
}

export default Ship;
