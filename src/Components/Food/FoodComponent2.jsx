import { Box, Hidden, Paper, Typography } from "@mui/material";
import React from 'react';
// import Component3 from './Component3';
import FoodComponent3 from './FoodComponent3';
export default function FoodComponent2() {
  return (
    <div>
        <Box>
        <Paper elevation={1}>
          <Box paddingLeft={"15px"}>
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "33vh", xs: "25vh" },
                backgroundImage: `url(https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2019/12/Onion-Dosa.jpg)`,
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
              <Typography variant="h6" py={"auto"}>
              Get Your Fill Of Cheap Food From These Restaurants With Zomato
              </Typography>
              {/* <Typography variant="h4" py={"auto"}>
                an Adventure Guide
              </Typography> */}

              <Box paddingTop={"5px"} paddingBottom="20px">
                <Typography variant="caption text" py={"auto"}>
                  <b>Travel</b> / Sep 04 2020
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <FoodComponent3/>
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
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "100vh", xs: "100vh" },
                backgroundImage: `url(https://static.toiimg.com/photo/76179976.cms)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />
            {/* <Typography align="center" py="auto" my="auto">
              Advertistement
            </Typography> */}
          </Box>
        </Box>
      </Hidden>
    </div>
  )
}
