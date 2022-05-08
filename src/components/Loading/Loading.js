import React from "react";
import { Spinner } from "react-bootstrap";

// Loading Spinner
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Loading;
