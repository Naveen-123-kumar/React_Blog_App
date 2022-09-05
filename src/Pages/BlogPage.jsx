import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LandingPage from "../Components/LandingPage/LandingPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaperComponent from "../Components/LatestComponent/PaperComponent";
import LatestPaper from "../Components/LatestStoriesComponent/LatestPaper";
import MainPage from "../Components/LatestArticleComponent/MainPage";
import { Link } from "react-router-dom";
import Card1 from "../Components/ReactAnimationComponent/Card1";
const BlogPage = () => {
  return (
    <>
      <Paper elevation={0}>
        <LandingPage />
        <Box
          mx="auto"
          paddingTop="20px"
          sx={{
            paddingBottom: { md: "80px", xs: "40px" },
            width: { md: "90%", xs: "98%" },
          }}
        >
          <Typography variant="h4">The Latest</Typography>
          <PaperComponent />
        </Box>
        <MainPage />
        <Box
          mx="auto"
          width="90%"
          paddingTop="80px"
          sx={{ paddingBottom: { md: "80px", xs: "30px" } }}
        >
          <Typography variant="h4"> Latest Stories</Typography>
          <br />
          <br />
          <hr />
       
          <Card1/>
        </Box>
        <Box
          display={"flex"}
          sx={{
            paddingLeft: { xs: "20px", md: "70px" },
            paddingBottom: { xs: "20px", md: "40px" },
          }}
        >
          <Link to="/technology">
            <Typography variant="caption text" paddingTop={"5px"}>
              LOAD MORE
            </Typography>
          </Link>
          <Link to="/bollywood">
            <ArrowForwardIcon fontSize="medium"/>
          </Link>
        </Box>
      </Paper>
    </>
  );
};

export default BlogPage;
