import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LandingPage from "../Components/LandingPage/LandingPage";
import LatestArticle from "../Components/LatestArticleComponent/LatestArticle";
import PaperComponent from "../Components/LatestComponent/PaperComponent";
import Navbar from "../Components/TopNavbar/Navbar";
import LatestPaper from "../Components/LatestStoriesComponent/LatestPaper";
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
        <Box mx="auto" width="90%" paddingBottom={"80px"} paddingTop="20px">
          <Typography variant="h4"> Latest Article</Typography>
          <br /><br />

          <LatestArticle />
        </Box>

        <Box mx="auto" width="90%" paddingBottom={"80px"} paddingTop="20px">
          <Typography variant="h4"> Latest Stories</Typography>
          <br />
          <br />
          <hr />
          <LatestPaper />
        </Box>
      </Paper>
    </>
  );
};

export default BlogPage;
