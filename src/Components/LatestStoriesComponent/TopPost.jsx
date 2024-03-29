import { Box, Paper, Typography, Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/OldBuilding.jpg";
import { NewsContext } from "../../contextAPI/NewsProvider";
// import { Data } from "../Bollywood/Component1";
// const Data = [
//   {
//     id: "4pid30ff84",
//     img1: 'https://www.themoviedb.org/t/p/w235_and_h235_face/36kNTfOAqJhom14fEoU56cPrhF6.jpg',
//     Heading1: "Ranvir Kapur is felling happy",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     id: "5pid30ff84",
//     img1: 'https://img.indiaforums.com/media/640x0/50/0732-anushka-sharma-karnesh-sharma.jpg',
//     Heading1: "Anushaka Sharma is with her friend",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     id: "6pid30ff84",
//     img1: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Sonam-Kapoor-attends-Cond%C3%A9-Nast-Traveller-India-event.jpg',
//     Heading1: "Sonam Kapur lates news",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
// ];

const TopPost = () => {
  return (
    <>
      <Cards></Cards>
    </>
  );
};
const Cards = () => {
  const { bollywood } = useContext(NewsContext);
  const listitems = bollywood?.slice(0, 3).map((card) => (
    <Grid item lg="12" xs={12}>
      <Link to={`/bollywood/${card.id}`} style={{ textDecoration: "none" }}>
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
                backgroundImage: `url(${card.img1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
              textAlign="left"
            />
            <Box
              sx={{ width: { md: "450px", xs: "200px" } }}
              paddingLeft="15px"
            >
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
      </Link>
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
