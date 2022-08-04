import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const BollywoodPage = () => {
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
            <Component1 />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Top Post
              </Typography>
            </Box>
            <Component2 />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BollywoodPage;
