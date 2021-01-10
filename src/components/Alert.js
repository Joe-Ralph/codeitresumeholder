import React from "react";

const Alert = ({ data }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {data}
    </div>
  );
};

export default Alert;
