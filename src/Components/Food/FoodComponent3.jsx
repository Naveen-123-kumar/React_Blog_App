import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { NewsContext } from "../../contextAPI/NewsProvider";
import { useContext } from "react";
export default function FoodComponent3() {
  return (
    <div>
      <Cards></Cards>
    </div>
  );
}
const Cards = () => {
  const { food } = useContext(NewsContext);
  const listitems = food?.slice(0, 3).map((card) => (
    <Grid item lg="12" xs={12}>
      <Link to={`/food/${card.id}`} style={{ textDecoration: "none" }}>
        <Paper elevation={1}>
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              display: { xs: "flex", md: "flex" },
            }}
            paddingY="10px"
          >
            <Box
              sx={{
                width: { md: "150px", xs: "160px" },
                height: { md: "14vh", xs: "15vh" },
                backgroundImage: `url(${card.img1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
              textAlign="left"
            />
            <Box
              sx={{ width: { md: "450px", xs: "200px" } }}
              paddingLeft="15px"
            >
              <Typography variant="subtitle1" py={"auto"}>
                <b>{card.Heading1}</b>
              </Typography>
              <Typography variant="subtitle1" py={"auto"}>
                <b>{card.Heading2}</b>
              </Typography>

              <Box paddingTop={"5px"} paddingBottom="5px">
                <Typography variant="caption text" py={"auto"}>
                  <b>{card.subh1}</b> {card.date1}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={1}
        display={"flex"}
        flexDirection="column"
        px="auto"
      >
        {listitems}
      </Grid>
    </>
  );
};
