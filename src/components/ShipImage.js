import { useEffect, useRef, useState } from "react";
import { useWorker } from "@koale/useworker";
import createShipImage from "../lib/createShipImage";

import styles from "./shipimage.module.css";

const ShipImage = ({ tiles, dimensions, ...other }) => {
  const [imageWorker] = useWorker(createShipImage);
  const canvasRef = useRef();
  const [imageBuffer, setImageBuffer] = useState(null);

  useEffect(() => {
    if (!tiles || !dimensions) {
      return;
    }
    const runImageWorker = async () => {
      setImageBuffer(await imageWorker(tiles, dimensions));
    };
    runImageWorker();
  }, [tiles, dimensions, imageWorker])

  useEffect(() => {
    if (!imageBuffer) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 56;
    canvas.height = 56;

    const canvData = context.createImageData(56, 56);
    canvData.data.set(imageBuffer);
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    context.putImageData(canvData, 0, 0);
  }, [imageBuffer])

  return <canvas ref={canvasRef} className={styles.image} {...other} />;
};

export default ShipImage;
