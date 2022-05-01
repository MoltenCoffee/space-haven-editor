import { readFile, writeFile } from "node:fs/promises";
import { XMLParser } from "fast-xml-parser";

const xmlFileToJsonFile = async (src, dest, objParser) => {
  const xmlParser = new XMLParser({
    allowBooleanAttributes: true,
    ignoreDeclaration: true,
    ignoreAttributes: false,
    parseAttributeValue: true,
    parseTagValue: true,
    trimValues: true,
    attributesGroupName: "_attributes",
    attributeNamePrefix: "",
  });
  let obj;
  try {
    obj = xmlParser.parse(await readFile(src));

    if (objParser) {
      obj = await objParser(obj);
    }

    await writeFile(dest, JSON.stringify(obj, null, 2));
  } catch (error) {
    console.log(error);
    console.log(src);
  }
};

export default xmlFileToJsonFile;
