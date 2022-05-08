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
        <Box mx="auto" paddingTop="20px" sx={{paddingBottom:{md:'80px',xs:'40px'},width:{md:'90%',xs:'98%'}}} >
          <Typography variant="h4">The Latest</Typography>
          <PaperComponent />
        </Box>
      
        <MainPage/>

        <Box mx="auto" width="90%" paddingTop="80px" sx={{paddingBottom:{md:'80px',xs:'30px'}}}>
          <Typography variant="h4"> Latest Stories</Typography>
          <br />
          <br />
          <hr />
          <LatestPaper />
        </Box>
        <Box display={'flex'} sx={{paddingLeft:{xs:'20px',md:'70px'},paddingBottom:{xs:'20px',md:'40px'}}}>
          <Typography variant="caption text" paddingTop={'5px'}>LOAD MORE</Typography>
          <ArrowForwardIcon fontSize="large"/>
        </Box>
      </Paper>
    </>
  );
};

export default BlogPage;
