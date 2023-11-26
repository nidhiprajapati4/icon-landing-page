"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { ImageSlider } from "./data";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import responsiveValue from "./responsive";
import {
  IconMainGrid,
  ButtonGrid,
  ContentGrid,
  ViewButton,
} from "./IconSliderStyle";


const customFn = function (i) {
  return (
    <div
      style={{
        width: "17px",
        height: "17px",
        backgroundColor: i === 0 ? "black" : "grey",
        borderRadius: "10px",
      }}
    />
  );
};

export default function IconSlider() {
  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: customFn,
    responsive: responsiveValue,
  };
  return (
    <IconMainGrid>
      <Typography
        fontSize="28px"
        fontWeight={800}
        marginTop="60px"
        marginLeft="40px"
      >
        Featured Icons
      </Typography>
      <Slider {...settings}>
        {ImageSlider.map((item) => (
          <Grid className="grid-main">
            <Grid className="gradient"></Grid>
            <img
              className="icon-img"
              src={item.ImgUrl}
              alt="sliderIcon"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                objectFit: "cover",
              }}
            />
            <ContentGrid>
              <Typography fontSize="28px" fontWeight={800} variant="h4">
                {item.Heading}
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                {item.SubHeading}
              </Typography>
              <Typography
                borderBottom="1px solid #E32320"
                width="50%"
                className="red-border"
              ></Typography>
              <Typography
                display="none"
                fontSize="14px"
                fontWeight={700}
                className="view-content"
              >
                Business / Creative
              </Typography>
              <ViewButton className="view-button">View Icon</ViewButton>
              <Typography fontSize="14px" fontWeight={400}>
                {item.Paragraph}
              </Typography>
            </ContentGrid>
          </Grid>
        ))}
      </Slider>
    </IconMainGrid>
  );
}
