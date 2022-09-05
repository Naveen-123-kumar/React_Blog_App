import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/OldBuilding.jpg";
const Data = [
  {
    img1: Image1,
    Heading1: "Performance comparison for 5 javaScript Object Iterations",

    sub1: "Dimitry Nozhenko",
  },
  {
    img1: Image1,
    Heading1: "Performance comparison for 5 javaScript Object Iterations",

    sub1: "Dimitry Nozhenko",
  },
  {
    img1: Image1,
    Heading1: "Performance comparison for 5 javaScript Object Iterations",

    sub1: "Dimitry Nozhenko",
  },
  {
    img1: Image1,
    Heading1: "Performance comparison for 5 javaScript Object Iterations",

    sub1: "Dimitry Nozhenko",
  },
];
const Card2 = () => {
  return (
    <>
      <Cards Data={Data}></Cards>
    </>
  );
};


const Cards = (props) => {
  const listitems = props.Data.map((card) => (
    <Grid item xs={12} padding="10px" borderRadius={"10px"}>
      <Box>
        <Paper>
          <Box
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "space-between" },
            }}
          >
            <Box paddingY={'10px'} paddingLeft='10px'>
              <Typography variant="subtitle1">{card.Heading1}</Typography>
              <Typography variant="caption text">{card.sub1}</Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { md: "0px", xs: "80px" },
                  height: { md: "11vh", xs: "11vh" },
                  backgroundImage: `url(${Image1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  ));
  return (
    <>
      <Grid container justifyContent={"center"} paddingY="30px">
        {listitems}
      </Grid>
    </>
  );
};

export default Card2;
