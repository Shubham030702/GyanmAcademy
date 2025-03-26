
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import "./css/Loader.css"; 

function Loader() {
  return (
    <>
      <div className="loader"></div>
      <h1 className="waiting">
        Please Wait...{" "}
        <FontAwesomeIcon icon={faHandsPraying} size="xl" />
      </h1>
    </>
  );
}


export default Loader
