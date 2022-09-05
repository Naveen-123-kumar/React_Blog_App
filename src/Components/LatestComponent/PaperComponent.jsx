import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/OldBuilding.jpg";
import { NewsContext } from "../../contextAPI/NewsProvider";
const Data = [
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2022",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2022",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2022",
  },
];
const PaperComponent = () => {
  return (
    <>
      <Cards></Cards>
    </>
  );
};
const Cards = (props) => {
  const {hollywood}=useContext(NewsContext)
  const listitems = hollywood?.slice(0,3).map((card,index) => (
    <Grid item lg={4} xs={12} >
        <Link to={`/hollywood/${card.id}`} style={{ textDecoration: "none" }}>
  
      <Box sx={{ width: { xs: "100%", md: "100%" }, paddingTop: {md:'30px',xs:'30px'}}}>
        <Paper elevation={1}>
          <Box
            sx={{
              width: { md: "390px", xs: "350px" },
              height: { md: "30vh", xs: "30vh" },
              backgroundImage: `url(${card.img1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box paddingLeft={"50px"}>
            <Typography variant="h5" py={"auto"}>
              {card.Heading1}
            </Typography>
            <Typography variant="h5" py={"auto"}>
              {card.Heading2}
            </Typography>
            <Typography variant="subtitle2" py={"auto"}>
              {card.sub1}
            </Typography>
            <Box paddingTop={"20px"} paddingBottom="15px">
              <Typography variant="subtitle1" py={"auto"}>
                <b>{card.subh1}</b> {card.date1}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={3}>
        {listitems}
      </Grid>
    </>
  );
};
export default PaperComponent;
