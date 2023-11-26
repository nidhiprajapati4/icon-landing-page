import React from "react";
import {
  Grid,
  Typography,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  MainGrid,
  HeadingGrid,
  SearchbarGrid,
  MainHeadingTypo,
  CircleImage,
  IconSpan,
  ParagraphTypo,
} from "./SearchSectionStyle";

export default function SearchSection() {
  return (
    <MainGrid>
      <HeadingGrid>
        <MainHeadingTypo variant="h1" component="h1">
          <CircleImage src="/Images/img-vector-meet.png" alt="circle" />
          Meet your
          <IconSpan> Icon</IconSpan>
        </MainHeadingTypo>
        <ParagraphTypo variant="p" component="p">
          Icon delivers a once-in-a-lifetime opportunity to directly connect you
          with artists you admire.
        </ParagraphTypo>
      </HeadingGrid>
      <SearchbarGrid>
        <TextField
          id="search"
          type="search"
          label="Porfolio review, Photoshop, Canon..."
          sx={{ width: "30%", height: "48px", margin: "0px" }}
        ></TextField>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <FormControl fullWidth style={{ width: "192px" }}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Speciality
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Speciality"
              style={{ height: "55px", margin: "0px" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ width: "192px" }}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "black" }}
            >
              Topic
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Topic"
              style={{ height: "55px", margin: "0px" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <SearchIcon
            sx={{
              padding: "9px",
              backgroundColor: "#E32320",
              color: "white",
              fontSize: "10px",
              width: "64px",
              height: "48px",
              borderRadius: "5px",
              marginRight: "20px",
            }}
          />
        </Grid>
      </SearchbarGrid>
    </MainGrid>
  );
}
