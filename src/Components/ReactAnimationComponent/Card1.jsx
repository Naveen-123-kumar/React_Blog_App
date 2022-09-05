import React, { useContext } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import Image1 from "../../Assets/OldBuilding.jpg";
import Image2 from "../../Assets/Avatarjpg.jpg";
import { Link } from "react-router-dom";
import { NewsContext } from "../../contextAPI/NewsProvider";

// export const Data = [
//   {
//     id: "1pid30ff84",
//     img1: "https://assets.thehansindia.com/h-upload/2021/07/28/1091969-ltec.webp",

//     Heading1: "Blog Chain",
//     Heading2:
//       "A blockchain is a distributed database  that is shared among the network",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     blog: "A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.",
//     date1: "/ August 19 2017",
//   },
//   {
//     id: "2pid30ff84",
//     img1: "https://pbs.twimg.com/card_img/1563691932173611008/DvNnDUEz?format=png&name=medium",
//     Heading1: "Reactjs",
//     Heading2:
//       "React is a declarative, efficient, and flexible JavaScript library",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     blog: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.React has a few different kinds of components, but we’ll start with React.Component subclasses:",
//     date1: "/ August 19 2017",
//   },
//   {
//     id: "3pid30ff84",
//     img1: "https://redux.js.org/img/redux-logo-landscape.png",
//     Heading1: "Redux",
//     Heading2: "Redux is a predictable state container for JavaScript apps.",
//     sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
//     subh1: "Travel",
//     blog: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
//     date1: "/ August 19 2017",
//   },
// ];

export default function Card1() {
  return (
    <>
      <Cards></Cards>
    </>
  );
};
// export default Card1;

const Cards = (props) => {
  const { technology } = useContext(NewsContext);
  const listitems = technology?.map((card) => (
    <Grid item lg={3.3} xs={12}>
      <Link to={`/technology/${card.id}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{ width: { xs: "100%", md: "100%" }, paddingTop: "60px" }}
          justifyContent="center"
        >
          <Paper elevation={1}>
            <Box
              sx={{
                width: { md: "330px", xs: "340px" },
                height: { md: "30vh", xs: "30vh" },
                backgroundImage: `url(${card.img1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
              textAlign="left"
            />
            <Box paddingY={"20px"} paddingLeft="10px">
              <Typography variant="h5" py={"auto"}>
                {card.Heading1}
              </Typography>
              <Typography variant="subtitle2">{card.Heading2}</Typography>

              <Box
                sx={{
                  paddingY: "10px",
                  display: { md: "flex", xs: "flex" },
                  justifyContent: { md: "left" },
                }}
              >
                <Box
                  sx={{
                    width: { md: "55px", xs: "70px" },
                    height: { md: "9vh", xs: "9vh" },
                    backgroundImage: `url(${Image2})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                />
                <Box paddingLeft="10px">
                  <Typography variant="subtitle1">Naveen Kumar</Typography>
                  <Typography variant="caption text">
                    May 04,2022 10 min read
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="space-evenly"
        paddingBottom={"50px"}
      >
        {listitems}
      </Grid>
    </>
  );
};
