const createShipImage = (tiles, dimensions) => {
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

  const hullCodes = [
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

  const wallCodes = [
    "31",
    "43",
    "44",
    "48",
    "115",
    "122",
    "423",
    "425",
    "426",
    "428",
    "438",
    "2757",
    "2764",
    "2765",
    "2767",
    "2768",
    "2769",
    "2770",
    "2771",
    "2772",
    "2861",
    "2862",
    "2863",
    "2864",
    "2866",
  ];

  const doorCodes = [
    "25",
    "424",
    "905",
    "2755",
  ];

  const engines = [
    "2655",
    "851",
  ];

  const storages = [
    "82",
    "632",
  ]

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

  const imgBuffer = new Uint8ClampedArray(dimensions.y * dimensions.x * 4);

  for (let y = 0; y < dimensions.y; y++) {
    for (let x = 0; x < dimensions.x; x++) {
      const pos = (y * dimensions.x + x) * 4;
      const data = drawingArray[x][y]?._attributes?.m;
      // Empty tiles
      if (!data) {
        imgBuffer[pos] = 0;
        imgBuffer[pos + 1] = 0;
        imgBuffer[pos + 2] = 0;
        imgBuffer[pos + 3] = 0;
        continue;
      }
      // Forbidden areas (border, docking and behind engines)
      if (data === "-2") {
        imgBuffer[pos] = 20;
        imgBuffer[pos + 1] = 20;
        imgBuffer[pos + 2] = 0;
        imgBuffer[pos + 3] = 128;
        continue;
      }
      // Hull blocks
      if (hullCodes.includes(data)) {
        imgBuffer[pos] = 255;
        imgBuffer[pos + 1] = 255;
        imgBuffer[pos + 2] = 255;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      // Walls
      if (wallCodes.includes(data)) {
        imgBuffer[pos] = 200;
        imgBuffer[pos + 1] = 200;
        imgBuffer[pos + 2] = 200;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      if (doorCodes.includes(data)) {
        imgBuffer[pos] = 50;
        imgBuffer[pos + 1] = 50;
        imgBuffer[pos + 2] = 200;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      if (engines.includes(data)) {
        imgBuffer[pos] = 200;
        imgBuffer[pos + 1] = 200;
        imgBuffer[pos + 2] = 50;
        imgBuffer[pos + 3] = 0;
        continue;
      }
      if (storages.includes(data)) {
        imgBuffer[pos] = 255;
        imgBuffer[pos + 1] = 165;
        imgBuffer[pos + 2] = 0;
        imgBuffer[pos + 3] = 255;
        continue;
      }
      // Else
      imgBuffer[pos] = 100;
      imgBuffer[pos + 1] = 100;
      imgBuffer[pos + 2] = 100;
      imgBuffer[pos + 3] = 255;
    }
  }

  return imgBuffer;
};

export default createShipImage;
