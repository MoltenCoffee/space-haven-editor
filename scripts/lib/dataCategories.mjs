const defaultParser = (
  obj,
  txt,
  {
    categoryName,
    itemName,
    nameObject = "name",
    nameIdKey = "tid",
    objectIdKey = "id",
  },
) => {
  const data = {};
  obj.data[categoryName][itemName || categoryName.toLowerCase()].forEach(
    (item) => {
      const nameId = item[nameObject]?._attributes?.[nameIdKey];
      data[item._attributes[objectIdKey]] = {
        name: txt[nameId] || null,
      };
    },
  );
  return data;
};

const dataCategories = [
  {
    tag: "attributes",
    parse: (obj, txt) =>
      Object.values(obj.data.PersonalitySettings.settings)
        .map((item) => item.attributes)
        .filter(Boolean)[0]
        .l.map((item) => ({
          id: item.name._attributes.tid,
          name: txt[item.name._attributes.tid] || null,
        })),
  },
  {
    tag: "products",
    parse: (obj, txt) => {
      const data = {};
      Object.values(obj.data.Product.product).forEach((product) => {
        const type = product._attributes.type;
        const id = product._attributes.eid;
        const nameId = product.name?._attributes?.tid;
        if (!data[type]) data[type] = {};

        data[type][id] = {
          name: txt[nameId] || null,
        };
      });

      return data;
    },
  },
  {
    tag: "monsters",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "Monster",
        nameObject: "monsterName",
        objectIdKey: "cid",
      }),
  },
  {
    tag: "items",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "Item",
        objectIdKey: "mid",
      }),
  },
  {
    tag: "techs",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "Tech",
      }),
  },
  {
    tag: "crafts",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "Craft",
        objectIdKey: "cid",
      }),
  },
  // {
  //   tag: "robots",
  //   parse: (obj, txt) =>
  //     defaultParser(obj, txt, {
  //       categoryName: "Robot",
  //       itemName: "robot",
  //       objectIdKey: "cid",
  //       // nameObject: "nameInitials",
  //     }),
  // },
  {
    tag: "conditions",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "CharacterCondition",
        itemName: "condition",
      }),
  },
  { tag: "skills", path: [] },
  {
    tag: "traits",
    parse: (obj, txt) =>
      defaultParser(obj, txt, {
        categoryName: "CharacterTrait",
        itemName: "trait",
      }),
  },
];

export default dataCategories;
