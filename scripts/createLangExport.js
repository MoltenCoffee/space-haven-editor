const fs = require("fs/promises");
const path = require("path");

const RAW_PATH = path.resolve(process.cwd(), "src", "lang");
const COMPILED_PATH = path.resolve(RAW_PATH, "compiled");
const INDEX_PATH = path.join(RAW_PATH, "index.js");

const main = async () => {
  const fileList = await fs.readdir(COMPILED_PATH, { withFileTypes: true });

  if (fileList.length < 1) {
    throw new Error("Language files are not compiled");
  }

  fileList.filter((item) => item.isFile());
  fileList.filter(({ name }) => path.extname(name) === ".json");
  fileList.sort(({ name: nameA }, { name: nameB }) => {
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const imports = [];
  const exports = [];

  fileList.forEach(({ name }) => {
    const baseName = path.basename(name, ".json");
    const safeName = baseName.replace("-", "_");
    imports.push(`import ${safeName} from "./compiled/${name}";`);
    exports.push(`"${baseName}": ${safeName},`);
  });

  const file = `${imports.join("\n")}\n
const messages = {
  ${exports.join("\n")}
};
export default messages;\n`;

  await fs.writeFile(INDEX_PATH, file);
};

main();
