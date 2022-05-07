import { Box, Grid, Hidden, Paper, Typography } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/Avatarjpg.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image2 from "../../Assets/ReactApp.png";
import Image3 from "../../Assets/CodeImage.png";
import Card1 from "./Card1";
import Card2 from "./Card2";

const ReactAnimation = () => {
  return (
    <>
      <Grid container bgcolor={"white"} justifyContent="center" paddingY={'20px'}>
        <Grid item lg={4.5} xs={11}>
          <Box paddingY={"10px"}>
            <Typography
              sx={{ fontSize: { md: "36px", xs: "24px" } }}
              textAlign="center"
            >
              5 Ways to annimate React app
            </Typography>
          </Box>
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { md: "space-between" },
            }}
          >
            <Box
              sx={{
                display: { md: "flex", xs: "flex" },
                justifyContent: { md: "space-between" },
                paddingBottom: { md: "20px",xs:'20px' },
              }}
            >
              <Box
                sx={{
                  width: { md: "70px", xs: "70px" },
                  height: { md: "11vh", xs: "9vh" },
                  backgroundImage: `url(${Image1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              />
              <Box paddingLeft="10px">
                <Typography variant="h6" paddingTop={"5px"}>
                  Naveen Kumar
                </Typography>
                <Typography variant="caption text">
                  May 04,2022 10 min read
                </Typography>
              </Box>
            </Box>
            <Box padding={"10px"} sx={{paddingY:{xs:'20px',md:'0'}}}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Box>
          </Box>
          <Box mx="auto " paddingX={"auto"}>
            <Box
              sx={{
                marginBottom: "20px",
                paddingX: "28px",
                width: { md: "450px", xs: "275px" },
                height: { md: "40vh", xs: "25vh" },
                backgroundImage: `url(${Image2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            />
            <Typography
              variant="subtitle2"
              textAlign={"justify"}
              paddingY="20px"
            >
              Animation in ReactJs app is a popular topic and there are many
              ways to create different types of animations.Many developers
              create animation exclusively using css and adding classes to HTML
              tags. This is a great way and you should use it. If you want to
              create complex animations you can pay attention to GreenSock.
              GreenSock is the most powerful animation platform. There are also
              a lot of libraries, components for creating animation in React.
              Let’s talk about them
            </Typography>

            <Typography variant="subtitle1">Lets talk about them</Typography>
            <Box
              sx={{
                marginY: "20px",
                paddingX: "28px",
                width: { md: "450px", xs: "275px" },
                height: { md: "80vh", xs: "45vh" },
                backgroundImage: `url(${Image3})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            />
          </Box>
          <Box>
            <Paper elevation={1}>
              <Box
                sx={{
                  display: { md: "flex", xs: "flex" },
                  // justifyContent: { md: "space-b" },
                }}
              >
                <Box
                  sx={{
                    marginTop: "20px",
                    width: { md: "70px", xs: "70px" },
                    height: { md: "11vh", xs: "9vh" },
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                />
                <Box paddingLeft="10px" paddingY={"20px"}>
                  <Typography variant="caption text">Written by</Typography>
                  <Typography variant="subtitle1">Naveen Kumar</Typography>
                  <Typography variant="caption text">
                    May 04,2022 10 min read
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Hidden mdDown>
          <Card1 />
        </Hidden>
        <Hidden smUp>
          <Card2 />
        </Hidden>
      </Grid>
    </>
  );
};

export default ReactAnimation;
