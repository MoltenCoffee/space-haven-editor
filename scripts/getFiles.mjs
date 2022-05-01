import { mkdir } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

import StreamZip from "node-stream-zip";

import checkGameLocation from "./lib/checkGameLocation.mjs";
import getDevSettings from "./lib/getDevSettings.mjs";
import xmlFileToJsonFile from "./lib/xmlFileToJsonFile.mjs";
import parseTexts from "./lib/parseTexts.mjs";

const zippedFiles = [
  { src: "library/haven", target: "haven.xml" },
  { src: "library/texts", target: "texts.xml", parser: parseTexts },
];

const main = async () => {
  const settings = await getDevSettings();
  const { gamedir } = settings;

  if (!(await checkGameLocation(gamedir))) {
    throw new Error(
      "Invalid gamedir set in 'dev-settings.json'. 'spacehaven.jar' not found.",
    );
  }

  const dir = dirname(fileURLToPath(import.meta.url));
  const targetDir = resolve(dir, "..", "temp");
  await mkdir(targetDir, { recursive: true });

  const zip = new StreamZip.async({ file: join(gamedir, "spacehaven.jar") });
  await Promise.all(
    zippedFiles.map(({ src, target }) =>
      zip.extract(src, join(targetDir, target)),
    ),
  );

  await zip.close();

  await Promise.all(
    zippedFiles.map(({ target, parser }) =>
      xmlFileToJsonFile(
        join(targetDir, target),
        join(targetDir, target.replace(".xml", ".json")),
        parser || null,
      ),
    ),
  );
};

main();
