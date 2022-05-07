import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/OldBuilding.jpg";
const Data = [
  {
    img1: Image1,
    Heading1: "Catch Waves with",
    Heading2: "an Adventure Guide",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
];

const TopPost = () => {
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
          }}
          paddingY="10px"
        >
          <Box
            sx={{
              width: { md: "150px", xs: "160px" },
              height: { md: "14vh", xs: "15vh" },
              backgroundImage: `url(${Image1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box sx={{ width: { md: "450px", xs: "200px" } }} paddingLeft="15px">
            <Typography variant="subtitle1" py={"auto"}>
              <b>{card.Heading1}</b>
            </Typography>
            <Typography variant="subtitle1" py={"auto"}>
              <b>{card.Heading2}</b>
            </Typography>

            <Box paddingTop={"5px"} paddingBottom="5px">
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
        px="auto"
      >
        {listitems}
      </Grid>
    </>
  );
};
export default TopPost;
