import React from "react";
import ProgressBar from './ProgressBar'

const FileUpload = ({uploadFile,handleFileSave,progressState}) => {
  return (
    <div className="d-grid gap-3">
      <div className="input-group">
        <input
          type="file"
          className="custom-from"
          id="custom-file-input"
          onChange={uploadFile}
          accept="application/pdf"
        />
      </div>
      {progressState.active && <ProgressBar/>}
      <input
        className="btn btn-dark"
        type="button"
        value="Upload File (only .pdf files)"
        onClick={handleFileSave}
      />
    </div>
  );
};

export default FileUpload;
