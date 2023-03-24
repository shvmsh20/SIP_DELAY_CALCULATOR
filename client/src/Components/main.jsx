import React from "react";
import Calculator from "./index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

function Main() {
  return (
    <div className="rightSideBox">
      <h4 className="back">
        <IconButton size={"small"} sx={{ color: "black" }}>
          <ArrowBackIcon /> Back
        </IconButton>
      </h4>
      <Calculator />
    </div>
  );
}

export default Main;
