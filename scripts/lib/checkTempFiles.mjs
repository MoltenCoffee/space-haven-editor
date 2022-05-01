import { stat } from "node:fs/promises";
import { join } from "node:path";

const tempFiles = ["haven.json", "texts.json"];

const checkTempFiles = async (dir) => {
  if (!dir) return false;
  try {
    await Promise.all(tempFiles.map((fileName) => stat(join(dir, fileName))));
    return true;
  } catch (error) {
    return false;
  }
};

export default checkTempFiles;
