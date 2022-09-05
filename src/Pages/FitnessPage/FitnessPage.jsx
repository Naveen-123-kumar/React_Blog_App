import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import FitnessComponent1 from '../../Components/Fitness/FitnessComponent1';
import FitnessComponent2 from '../../Components/Fitness/FitnessComponent2';
export default function FitnessPage() {
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
                Fitness
              </Typography>
            </Box>
            <FitnessComponent1/>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Top Post
              </Typography>
            </Box>
            <FitnessComponent2/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
