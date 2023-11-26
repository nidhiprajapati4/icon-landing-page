import React from 'react';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function PrevArrow(props) {
    const { onClick } = props;

    return (
      <div onClick={onClick} className="arrowprevbutton">
        <ArrowBackIosNewIcon style={{ width: "60px", height: "59px", color:"white" }} />
      </div>
    );
  }

export default PrevArrow;