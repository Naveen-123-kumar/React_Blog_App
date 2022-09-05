import { Box, Paper, Typography,Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/OldBuilding.jpg";
import { NewsContext } from "../../contextAPI/NewsProvider";
// const Data=[
//   {
//     img1: Image1,
//     Heading1: "Catch Waves with",
//     Heading2: "an Adventure Guide",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     img1: Image1,
//     Heading1: "Joshua Tree",
//     Heading2: "Overnight Adventure",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     img1: Image1,
//     Heading1: "Joshua Tree",
//     Heading2: "Overnight Adventure",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     img1: Image1,
//     Heading1: "Joshua Tree",
//     Heading2: "Overnight Adventure",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
// ]
const LatestArticle = () => {
  return (
    <>
    <Cards></Cards>
    </>
  )
}
export default LatestArticle

const Cards=(props)=>{
  const {hollywood} =useContext(NewsContext)
  const listitems=hollywood?.slice(0,4).map((card,index)=>(
    <Grid item lg='11' xs={12} >
    <Link to={`/hollywood/${card.id}`} style={{ textDecoration: "none" }}>

    <Paper elevation={1}>

    <Box sx={{ width: { xs: "100%", md: "100%"},display:{xs:'flex',md:'flex'}}} paddingY='10px'>
    <Box
      sx={{
        width: { md: "255px", xs: "160px" },
        height: { md: "24vh", xs: "15vh" },
        backgroundImage: `url(${card.img1})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      borderRadius="10px"
      textAlign="left"
    />
    <Box sx={{width:{md:'450px',xs:'200px'}}} paddingLeft='20px'>
      <Typography variant="subtitle1" py={"auto"} >
      <b>{card.Heading1}</b>
      </Typography>
      <Typography variant="subtitle1" py={"auto"} >
      <b>{card.Heading2}</b>
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
</Link>
</Grid>
  ));
  return (
    <>
    <Grid container spacing={1} >
        {listitems}
      </Grid>
    </>
  )
}