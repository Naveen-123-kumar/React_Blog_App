import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LandingPage from "../Components/LandingPage/LandingPage";
import LatestArticle from "../Components/LatestArticleComponent/LatestArticle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaperComponent from "../Components/LatestComponent/PaperComponent";
import Navbar from "../Components/TopNavbar/Navbar";
import LatestPaper from "../Components/LatestStoriesComponent/LatestPaper";

import MainPage from "../Components/LatestArticleComponent/MainPage";
const BlogPage = () => {
  return (
    <>
      <Paper elevation={0}>
        <Navbar />
        <LandingPage />
        <Box mx="auto" width="90%" paddingBottom={"80px"} paddingTop="20px">
          <Typography variant="h4">The Latest</Typography>
          <PaperComponent />
        </Box>
      
        <MainPage/>

        <Box mx="auto" width="90%" paddingBottom={"80px"} paddingTop="80px">
          <Typography variant="h4"> Latest Stories</Typography>
          <br />
          <br />
          <hr />
          <LatestPaper />
        </Box>
        <Box display={'flex'} sx={{paddingLeft:{xs:'10px',md:'70px'},paddingBottom:{xs:'20px',md:'40px'}}}>
          <Typography variant="caption text" paddingTop={'5px'}>LOAD MORE</Typography>
          <ArrowForwardIcon fontSize="large"/>
        </Box>
      </Paper>
    </>
  );
};

export default BlogPage;
