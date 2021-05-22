import xml from "xml-js";
import { IS_COMPACT_OBJ } from "../constants";

const readXmlFile = (model) => {
  return xml.js2xml(model, { spaces: "\t", compact: IS_COMPACT_OBJ });
};

export default readXmlFile;
