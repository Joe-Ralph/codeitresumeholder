import React,{ useEffect } from "react";

const Alert = ({ data, setAlert }) => {
  useEffect(() => setTimeout(()=> setAlert({isAlert:false,alertData:""}),3000),[])
  return (
    <div className="alert alert-danger" role="alert">
      {data}
    </div>
  );
};

export default Alert;
