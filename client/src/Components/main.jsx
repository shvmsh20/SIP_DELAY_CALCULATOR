import React from "react";
import Calculator from "./index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

function Main() {
  return (
    <div className="rightSideBox">
        <button className="backBtn"><span>&#8592;</span> Back </button>       
      <Calculator />
    </div>
  );
}

export default Main;
