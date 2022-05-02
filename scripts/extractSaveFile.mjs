import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import xml from "xml-js";

import { IS_COMPACT_OBJ } from "../src/constants.js";

const main = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const tempDir = resolve(dir, "..", "temp");

  // This seems inefficient?
  const saveFile = await readFile(join(tempDir, "game"));

  await writeFile(
    join(tempDir, "game.json"),
    JSON.stringify(
      xml.xml2js(saveFile, {
        compact: IS_COMPACT_OBJ,
        alwaysArray: ["c", "ship", "l", "r", "m", "s", "t", "b", "e"],
      }),
      null,
      2,
    ),
  );
};

main();
