import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function NextArrow(props) {
    const { onClick } = props;

    return (
      <div onClick={onClick} className="arrownextbutton">
        <ArrowForwardIosIcon style={{ width: "60px", height: "59px", color:"white" }} />
      </div>
    );
  }

export default NextArrow;