import { stat, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SETTINGS_FILE = "dev-settings.json";

const getDevSettings = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const root = resolve(dir, "..", "..");
  const settingsPath = resolve(root, SETTINGS_FILE);

  try {
    await stat(settingsPath);
  } catch (error) {
    throw new Error("Dev-Settings file not found");
  }

  const settingsFile = await readFile(settingsPath);
  return JSON.parse(settingsFile);
};

export default getDevSettings;
