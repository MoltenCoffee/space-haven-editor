const createShipImage = (tiles) => {
  if (!Array.isArray(tiles)) {
    throw new TypeError();
  }

  const drawingArray = [];

  tiles.forEach((tile) => {
    const { x, y } = tile._attributes;
    if (!drawingArray[x]) {
      drawingArray[x] = [];
    }
    drawingArray[x][y] = tile;
  });

  const wallCodes = [
    "38",
    "46",
    "47",
    "206",
    "1144",
    "1149",
    "1711",
    "1713",
    "1794",
    "2758",
    "2759",
    "2760",
    "2762",
    "2763",
    "3029",
    "3031",
  ];

  drawingArray.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      if (!row[i]) {
        // row[i] = "\u00A0";
        continue;
      }

      const { m } = row[i]._attributes;
      // Forbidden areas
      // if (m === "-2") {
      //   row[i] = "\u00A0";
      //   continue;
      // }
    }
  });

  const imgBuffer = new Uint8ClampedArray(56 * 56 * 4);

  for (let y = 0; y < 56; y++) {
    for (let x = 0; x < 56; x++) {
      const pos = (y * 56 + x) * 4;
      const data = drawingArray[x][y]?._attributes?.m;
      if (!data) {
        imgBuffer[pos] = 0;
        imgBuffer[pos + 1] = 0;
        imgBuffer[pos + 2] = 0;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      if (data === "-2") {
        imgBuffer[pos] = 20;
        imgBuffer[pos + 1] = 20;
        imgBuffer[pos + 2] = 0;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      if (wallCodes.includes(data)) {
        imgBuffer[pos] = 255;
        imgBuffer[pos + 1] = 255;
        imgBuffer[pos + 2] = 255;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      imgBuffer[pos] = 100;
      imgBuffer[pos + 1] = 100;
      imgBuffer[pos + 2] = 100;
      imgBuffer[pos + 3] = 255;
    }
  }

  return imgBuffer;
};

export default createShipImage;
