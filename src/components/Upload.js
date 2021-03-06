import { useContext, useState } from "react";
import { fileOpen } from "browser-fs-access";
import { FormattedMessage, useIntl } from "react-intl";
import clsx from "clsx";

import { SaveContext } from "../context/SaveContext";
import Button from "./Button";

import styles from "./upload.module.css";

const Upload = () => {
  const { formatMessage } = useIntl();
  const { insertSaveData } = useContext(SaveContext);
  const [msg, setMsg] = useState(null);

  const handleClick = async (e) => {
    setMsg(null);

    let blobs;
    try {
      blobs = await fileOpen();
    } catch (err) {
      if (err.name === "AbortError") {
        // setMsg({ type: "error", text: "Aborted" });
        return;
      }
      setMsg({
        type: "error",
        text: formatMessage({
          id: "error_unknown",
          defaultMessage: "Something went wrong",
        }),
      });
    }

    // if (!blobs.length) {
    //   setMsg({ type: "error", text: "No files in directory" });
    // }
    // blobs.sort((a, b) => a.name.localeCompare(b.name, intl.locale));
    await insertSaveData(blobs);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <FormattedMessage id="open_save" defaultMessage="Open Save" />
      </Button>
      {msg && (
        <span className={clsx(styles.msg, styles[msg.type])}>{msg.text}</span>
      )}
    </div>
  );
};

export default Upload;
