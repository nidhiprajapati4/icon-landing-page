"use client";
import React from 'react'
import { Grid, Typography, Button } from '@mui/material';
import Slider from "react-slick";
import { ImageSlider } from './data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconMainGrid, ButtonGrid, ContentGrid, ViewButton } from './IconSliderStyle';
import { useRef, useCallback } from 'react';

export default function IconSlider() {
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    customPaging: function (i) {
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
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <IconMainGrid>
      <Typography fontSize="28px" fontWeight={800} marginTop="60px" marginLeft="40px">Featured Icons</Typography>
      <Slider {...settings} ref={slickRef}>
        {/* <ButtonGrid onClick={previous} left={100} className='arrowbutton'>
          <ArrowBackIosNewIcon style={{ width: "60px", height: "59px" }} />
        </ButtonGrid> */}
        {ImageSlider.map((item) =>
          <Grid className='grid-main'>
            <img className = 'icon-img' src={item.ImgUrl} alt='sliderIcon' style={{ display: "flex", justifyContent: "center", position: "relative" }} />
            <ContentGrid>
              <Typography fontSize="28px" fontWeight={800} variant='h4'>
                {item.Heading}
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                {item.SubHeading}
              </Typography>
              <Typography borderBottom="1px solid #E32320" width="50%" className='red-border'></Typography>
              <Typography display="none" fontSize="14px" fontWeight={700} className='view-content'>Business / Creative</Typography>
              <ViewButton className='view-button'>View Icon</ViewButton>
              <Typography fontSize="14px" fontWeight={400}>
                {item.Paragraph}
              </Typography>
            </ContentGrid>
          </Grid>
        )}
        {/* <ButtonGrid onClick={next} right={0} className='arrowbutton'>
          <ArrowForwardIosIcon style={{ width: "60px", height: "59px" }} />
        </ButtonGrid> */}
      </Slider>
    </IconMainGrid>
  );
}