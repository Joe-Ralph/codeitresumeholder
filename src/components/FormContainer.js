import React, { useState } from "react";
import NameSelect from "./NameSelect";
import firebase from "../firebase";
import FileUpload from "./FileUpload";
import FileDownload from "./FileDownload";
import Alert from "./Alert";

function FormContainer() {
  const [file, setFile] = useState("");
  const [userName, setUserName] = useState("");
  const [isDownloadState, setisDownloadState] = useState(false);
  const [alert, setAlert] = useState({ isAlert: false, alertData: "" });
  const downloadFile = (e) => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(userName);
    fileRef
      .getDownloadURL()
      .then(function (url) {
        window.open(url);
        setAlert({ isAlert: false, alertData: "" });
      })
      .catch(function (error) {
        if (error.code === "storage/object-not-found")
          setAlert({
            isAlert: true,
            alertData: "Resume for the given name not found",
          });
        else
          setAlert({
            isAlert: true,
            alertData: "Resume for the given name not found",
          });
      });
  };
  const uploadFile = (e) => {
    setFile(e.target.files[0]);
  };
  const changeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handleFileSave = (e) => {
    e.preventDefault();
    if (file !== "") {
        setAlert({ isAlert: false, alertData: "" });
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(userName);
      fileRef
        .put(file)
        .then(() => console.log("Uploaded"))
        .catch((err) => console.log(err));
    } else {
        setAlert({ isAlert: true, alertData: "No file selected" });
    }
  };
  const toggleDownloadView = (e) => {
    setisDownloadState(e.target.checked);
  };
  return (
    <div className="d-grid gap-3">
      <NameSelect changeName={changeName} />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="downloadViewSwitch"
          onChange={toggleDownloadView}
        />
        <label className="form-check-label" htmlFor="downloadViewSwitch">
          Download View
        </label>
      </div>
      {isDownloadState ? (
        <FileDownload downloadFile={downloadFile} userName={userName} />
      ) : (
        <FileUpload handleFileSave={handleFileSave} uploadFile={uploadFile} />
      )}
      {alert.isAlert && <Alert data={alert.alertData} />}
    </div>
  );
}

export default FormContainer;
