// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const NotFound = () => {
  return (
    <>
      <body id="body_error">
        <div
          id="error"
          title="404"
        >
          404
        </div>
        <br />
      </body>
      <p className="text-center text-3xl">Página no encontrada</p>
    </>
  );
};

export default NotFound;
