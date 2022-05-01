import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

import checkTempFiles from "./lib/checkTempFiles.mjs";
import dataCategories from "./lib/dataCategories.mjs";

const main = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const rootDir = resolve(dir, "..");
  const tempDir = join(rootDir, "temp");
  const dataDir = join(rootDir, "data");
  await mkdir(dataDir, { recursive: true });

  if (!(await checkTempFiles(tempDir))) {
    throw new Error(
      "Could not find game data files. Try running setting the correct path in 'dev-settings.json' and running:\n\nnpm run get-game-data\n",
    );
  }

  const gameData = JSON.parse(await readFile(join(tempDir, "haven.json")));
  const textData = JSON.parse(await readFile(join(tempDir, "texts.json")));

  await Promise.all(
    dataCategories
      .map(({ tag, parse }) => {
        if (!tag || !parse) return null;

        return writeFile(
          join(dataDir, `${tag}.json`),
          JSON.stringify(parse(gameData, textData), null, 2) + "\n",
        );
      })
      .filter(Boolean),
  );
};

main();
