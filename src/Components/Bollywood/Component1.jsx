import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../contextAPI/NewsProvider";

// export const Data = [
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
//   {
//     id: "7pid30ff84",
//     img1: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Kanika_Kapoor_launches_%22Teddy_Bear%22.jpg',
//     Heading1: "Kanika Kanpoor tries to explore her beauty",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     id: "8pid30ff84",
//     img1: 'https://images.indianexpress.com/2021/04/akshay-kumar-1200.jpg',
//     Heading1: "Akshay Kumar is a good actor in latest time",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     id: "9pid30ff84",
//     img1: 'https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/6/14/original/Ravi.jpg',
//     Heading1: "Ravi Teja is looking handsome",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
//   {
//     id: "10pid30ff84",
//     img1: 'https://images.hindustantimes.com/img/2022/06/23/1600x900/katrina-kaif-vicky-kaushal-1-165189741416x9_1655970452826_1655970461422.webp',
//     Heading1: "Vicky Kaushal is just trying to raise the temperature of swimming pool",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
//     subh1: "Travel",
//     date1: "/ August 19 2022",
//   },
// ];

const Component1 = () => {
  return (
    <>
      <Cards></Cards>
    </>
  );
};
const Cards = (props) => {
 const { bollywood } =useContext(NewsProvider)
  const listitems = bollywood?.map((card,index) => (
    <Grid item lg="12" xs={12} >
      <Link to={`/bollywood/${card.id}`} style={{ textDecoration: "none" }}>
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
              backgroundImage: `url(${card?.img1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box sx={{ width: { md: "450px", xs: "200px"}}} paddingLeft="20px">
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
        width={"100%"}
        paddingRight='10px'
      >
        {listitems}
      </Grid>
    </>
  );
};

export default Component1;
