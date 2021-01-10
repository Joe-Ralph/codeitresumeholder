import React, { useEffect, useState } from "react";

const FileDownload = ({ downloadFile, userName }) => {
  const [buttonTitle, setButtonTitle] = useState("");
  useEffect(() => {
    userName === "" || userName === "unnamed"
      ? setButtonTitle(`Choose Name`)
      : setButtonTitle(`Download Resume for ${userName}`);
  });
  return (
    <div className="d-grid gap-2">
      <input
        className={`btn btn-dark ${
          userName === "" || userName === "unnamed" ? "disabled" : ""
        }`}
        type="button"
        value={buttonTitle}
        onClick={downloadFile}
      />
    </div>
  );
};

export default FileDownload;
