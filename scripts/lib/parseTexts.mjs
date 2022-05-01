const parseTexts = (textObj) => {
  const parsed = {};
  Object.entries(textObj.t).forEach(([key, { _attributes, EN }]) => {
    if (!_attributes?.id || !EN) {
      console.log(
        `No valid combination in texts for ${key}: ${
          _attributes?.id || "null"
        }, ${EN || "null"}`,
      );
      return;
    }
    parsed[_attributes.id] = EN;
  });

  return parsed;
};

export default parseTexts;
