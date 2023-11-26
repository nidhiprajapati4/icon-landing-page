"use client";
import * as React from "react";
import { useState } from "react";
import {
  Grid,
  Drawer,
  Box,
  Button,
  IconButton,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import {
  MainGrid,
  HeadToolbar,
  TabItem,
  LoginButton,
  AccountButton,
  DrawerTabsGrid,
  DrawerMainGrid,
  RightDrawer,
  Logo
} from "./HeaderStyle";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainGrid>
        <HeadToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo
              src="/Images/icon.svg"
              alt="logo"
            ></Logo>
          </IconButton>
          <Grid>
            <Tabs aria-label="basic tabs example">
              <TabItem label="How it works" />
              <TabItem label="About us" />
              <TabItem label="Categories" />
              <TabItem label="FAQs" />
            </Tabs>
          </Grid>
          <Grid>
            <LoginButton>Login</LoginButton>
            <AccountButton>Create an account</AccountButton>
          </Grid>
          <DrawerMainGrid>
            <Grid onClick={handleDrawerOpen}>
              <MenuIcon />
            </Grid>
            <RightDrawer anchor="right" open={open} onClose={handleDrawerClose}>
              <DrawerTabsGrid>
                <TabItem label="How it works" />
                <TabItem label="About us" />
                <TabItem label="Categories" />
                <TabItem label="FAQs" />
              </DrawerTabsGrid>
              <Divider />
              <Grid style={{display: 'grid'}}>
                <LoginButton>Login</LoginButton>
                <AccountButton>Create an account</AccountButton>
              </Grid>
            </RightDrawer>
          </DrawerMainGrid>
        </HeadToolbar>
      </MainGrid>
    </Box>
  );
}
