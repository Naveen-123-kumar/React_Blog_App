import { Grid, Typography, Box, Hidden, Paper } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LatestArticle from "./LatestArticle";
import Image1 from "../../Assets/NewBuilding.jpg";
import { Link } from "react-router-dom";
import TopPost from "../LatestStoriesComponent/TopPost";
const MainPage = () => {
  
  return (
    <>
      <Box
        sx={{
          paddingLeft: { xs: "20px", md: "70px" },
          paddingBottom: { xs: "30px", md: "50px" },
        }}
      >
        <Typography variant="h4"> Latest Article</Typography>
      </Box>
      <Grid container>
        <Grid item lg="8" xs={12} sx={{ paddingLeft: { xs: "0", md: "70px" } }}>
          <LatestArticle />
          <Box
            display={"flex"}
            justifyContent="start"
            sx={{ paddingY: { xs: "20px", md: "30px" } }}
          >
            <Link to="/Page1">
            <ArrowDownwardIcon fontSize="large" color="red"/>
            <Typography variant="caption text" paddingBottom={'10px'} paddingLeft={'10px'}>
              LOAD MORE
            </Typography>
            </Link>
           
          </Box>
          <Hidden smDown>
            <Box paddingTop="80px">
              <Box
                sx={{
                  width: { md: "760px", xs: "450px" },
                  height: { md: "67vh", xs: "50vh" },
                  backgroundImage: `url(${Image1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                borderRadius="5px"
                textAlign="left"
              >
                <Typography
                  variant="h5"
                  py={"auto"}
                  color="white"
                  paddingTop={"250px"}
                  paddingLeft="50px"
                >
                  Titel of vertical galary
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={"wheat"}
                  py={"auto"}
                  paddingLeft="50px"
                >
                  Travel/ August 19 2017
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </Grid>
        <Grid item lg="3.6" xs={12}>
          <Hidden smDown>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ width: { md: "400px" } }}
              border="1px solid blue"
              borderRadius="10px"
              height={"90vh"}
            >
              <Typography align="center" py="auto" my="auto">
                Advertistement
              </Typography>
            </Box>
          </Hidden>
          <Box paddingY={2} textAlign="left">
            <Typography variant="h6">Top Posts</Typography>
          </Box>
          <Hidden>

            {/*  */}
             <Box>
              <Paper elevation={1}>
                <Box
                  sx={{
                    width: { md: "410px", xs: "360px" },
                    height: { md: "35vh", xs: "25vh" },
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                  borderRadius="10px"
                  textAlign="left"
                />
                <Box
                  sx={{
                    width: { md: "450px", xs: "200px" },
                    paddingX: { md: "0px", xs: "10px" },
                  }}
                  paddingBottom="20px"
                >
                  <Typography variant="h6">
                    <b>Catch Waves with</b>
                  </Typography>
                  <Typography variant="h6">
                    <b>an Adventure Guide</b>
                  </Typography>
                  <Box paddingTop={"5px"} paddingBottom="5px">
                    <Typography variant="caption text">
                      <b>Travel</b> / August 19 2017
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box> 
           {/*  */}

          </Hidden>
          <TopPost />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
