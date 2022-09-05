import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BollywoodComponent1 from "../../Components/Bollywood/BollywoodComponent1";
import Component2 from "../../Components/Bollywood/Component2";

export default function BollywoodPage() {
  return (
    <>
      <Box
        bgcolor={"white"}
        px="auto"
        mx="auto"
        sx={{
          width: { md: "100%", xs: "100%" },
          paddingY: { md: "10%", xs: "15%" },
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item lg={6} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Bollywood
              </Typography>
            </Box>
           <BollywoodComponent1/>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Top Post
              </Typography>
            </Box>
          <Component2/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
