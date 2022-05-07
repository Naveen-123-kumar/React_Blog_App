import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/OldBuilding.jpg";
const Data = [
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Catch Waves with an adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
];

const Component1 = () => {
  return (
    <>
      <Cards Data={Data}></Cards>
    </>
  );
};
const Cards = (props) => {
  const listitems = props.Data.map((card) => (
    <Grid item lg="12" xs={12}>
      <Paper elevation={1}>
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            display: { xs: "flex", md: "flex" },
            paddingY:{xs:'15px',md:'15px'}
          }}

        >
          <Box
            sx={{
              width: { md: "255px", xs: "150px" },
              height: { md: "22vh", xs: "17vh" },
              backgroundImage: `url(${Image1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box sx={{ width: { md: "450px", xs: "200px" } }} paddingLeft="20px">
            <Typography variant="h6" py={"auto"}>
              <b>{card.Heading1}</b>
            </Typography>
           
            <Typography variant="caption text" py={"auto"}>
              {card.sub1}
            </Typography>
            <Box paddingTop={"10px"} paddingBottom="5px">
              <Typography variant="caption text" py={"auto"}>
                <b>{card.subh1}</b> {card.date1}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={1}
        display={"flex"}
        flexDirection="column"
        width={"100%"}
        paddingRight='10px'
      >
        {listitems}
      </Grid>
    </>
  );
};

export default Component1;
