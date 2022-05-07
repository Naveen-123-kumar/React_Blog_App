import React from "react";
import { Container, Grid, Typography, Box, Paper, Hidden } from "@mui/material";
import Image1 from "../../Assets/NewBuilding.jpg";
import TopPost from "../LatestStoriesComponent/TopPost";

const Component2 = () => {
  return (
    <>
      <Box>
        <Paper elevation={1}>
          <Box paddingLeft={"15px"}>
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "33vh", xs: "25vh" },
                backgroundImage: `url(${Image1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />

            <Box
              sx={{
                width: { md: "450px", xs: "350px" },
                paddingTop: { md: "15px", xs: "30px" },
              }}
              // paddingBottom="20px"
            >
              <Typography variant="h4" py={"auto"}>
                Catch Waves with
              </Typography>
              <Typography variant="h4" py={"auto"}>
                an Adventure Guide
              </Typography>

              <Box paddingTop={"5px"} paddingBottom="20px">
                <Typography variant="caption text" py={"auto"}>
                  <b>Travel</b> / August 19 2017
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <TopPost />
      <Hidden mdDown>
        <Box sx={{ paddingTop: { md: "20px" } }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            justifyContent={"space-between"}
            border="1px solid blue"
            borderRadius="5px"
            height={"82vh"}
          >
            <Typography align="center" py="auto" my="auto">
              Advertistement
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Component2;
