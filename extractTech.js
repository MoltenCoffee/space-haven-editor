const fs = require("fs/promises");
const xml = require("xml-js");

const main = async () => {
  const tech = await fs.readFile("./tech.xml");
  const texts = await fs.readFile("./texts.xml");

  const techObject = xml.xml2js(tech, { compact: true }).Tech.tech;

  const textObject = xml.xml2js(texts, { compact: true }).t;
  const textArray = Object.keys(textObject);

  const filtered = {};
  textArray
    .filter((item) => item.includes("research"))
    .forEach((item) => {
      if (textObject[item]._attributes.id) {
        filtered[textObject[item]._attributes.id] = textObject[item].EN?._text;
      }
    });

  console.log(filtered)

  const things = {};

  techObject.forEach((item) => {
    if (item._attributes?.id && item.name?._attributes?.tid) {
      things[item._attributes?.id] =
        filtered[item?.name?._attributes?.tid] || item.name._attributes.tid;
    }
  });

  console.log(things);
};
main();
