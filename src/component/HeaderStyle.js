"use client";
import styled from "@emotion/styled";
import { Grid, Toolbar, Tab, Button, Tabs, Drawer } from "@mui/material";

export const MainGrid = styled(Grid)`
  background-color: white;
  box-shadow: none;
`;

export const HeadToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 70px;
  height: 32px;
  @media only screen and (max-width: 900px) {
    width: 60px;
    height: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 20px;
  }
`;

export const TabItem = styled(Tab)`
  text-transform: none;
  color: black;
  font-size: 16px;
  font-weight: 400;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  color: black;
  text-transform: none;
  font-weight: 700;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const AccountButton = styled(Button)`
  color: white;
  text-transform: none;
  background-color: black !important;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const DrawerTabsGrid = styled(Tabs)`
  .MuiTabs-flexContainer {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export const DrawerMainGrid = styled(Grid)`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

export const RightDrawer = styled(Drawer)`
  display: block;
`;
