import { stat } from "node:fs/promises";
import { resolve } from "node:path";

const checkGameLocation = async (gameLocation) => {
  if (!gameLocation) return false;
  try {
    await stat(resolve(gameLocation, "spacehaven.jar"));
    return true;
  } catch (error) {
    return false;
  }
};

export default checkGameLocation;
