"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const MainGrid = styled(Grid)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 52px;
`;

export const HeadingGrid = styled(Grid)`
  width: 625px;

  @media only screen and (max-width: 900px) {
    width: 525px;
  }

  @media only screen and (max-width: 600px) {
    width: 325px;
  }
`;

export const MainHeadingTypo = styled(Typography)`
  font-size: 64px;
  font-weight: 800;
  position: relative;

  @media only screen and (max-width: 900px) {
    font-size: 60px;
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    font-size: 44px;
    font-weight: 600;
  }
`;

export const CircleImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: 56px;
  width: 174px;
  height: 63px;

  @media only screen and (max-width: 900px) {
    width: 137px;
    height: 53px;
    left: 58px;
    bottom: 4px;
  }

  @media only screen and (max-width: 600px) {
    width: 98px;
    height: 40px;
    left: 10px;
    bottom: 4px;
  }
`;

export const IconSpan = styled.span`
  color: white;
  text-shadow: 2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black,
    -2px 2px 0px black;
`;

export const ParagraphTypo = styled(Typography)`
  font-size: 28px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SearchbarGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 40px 0px #00000014;
  width: 80%;
  height: 72px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
