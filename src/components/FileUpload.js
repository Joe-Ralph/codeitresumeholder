import React from "react";

const FileUpload = ({uploadFile,handleFileSave}) => {
  return (
    <div className="d-grid gap-3">
      <div className="input-group">
        <input
          type="file"
          className="custom-from"
          id="custom-file-input"
          onChange={uploadFile}
          accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>
      <input
        className="btn btn-dark"
        type="button"
        value="Upload File (only .pdf, .doc, .docx files)"
        onClick={handleFileSave}
      />
    </div>
  );
};

export default FileUpload;
