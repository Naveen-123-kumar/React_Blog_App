import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import FoodComponent1 from '../../Components/Food/FoodComponent1';
import FoodComponent2 from '../../Components/Food/FoodComponent2';
export default function FoodPage() {
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
                Food
              </Typography>
            </Box>
            <FoodComponent1/>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Top Post
              </Typography>
            </Box>
            <FoodComponent2/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
