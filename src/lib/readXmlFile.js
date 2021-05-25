import xml from "xml-js";
import { IS_COMPACT_OBJ } from "../constants";

const readXmlFile = async (file) => {
  const content = await file.text();

  if (!content) {
    return null;
  }

  return xml.xml2js(content, {
    compact: IS_COMPACT_OBJ,
    alwaysArray: ["c", "ship", "l", "r", "m", "s", "t", "b", "e"],
  });
};

export default readXmlFile;
