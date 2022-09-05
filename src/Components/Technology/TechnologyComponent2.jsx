import { Box, Hidden, Paper, Typography } from "@mui/material";
import React from "react";
import TechnologyComponent3 from "./TechnologyComponent3";
export default function TechnologyComponent2() {
  return (
    <>
      <Box>
        <Paper elevation={1}>
          <Box paddingLeft={"15px"}>
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "33vh", xs: "25vh" },
                backgroundImage: `url(https://www.spec-india.com/wp-content/uploads/2021/04/ReactJS-Developer.png)`,
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
            >
              <Typography variant="h6" py={"auto"}>
                ReactJS Developer: Role, Responsibilities, Skills, Salary And
                Lot More
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
      <TechnologyComponent3 />
      <Hidden mdDown>
        <Box sx={{ paddingTop: { md: "20px" } }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            justifyContent={"space-between"}
            border="1px solid blue"
            borderRadius="5px"
            height={"73vh"}
          >
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "100vh", xs: "100vh" },
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhB4-RctkGuYcJasxOEEIZDOMm2xmfuoZpQ&usqp=CAU)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />
          </Box>
        </Box>
      </Hidden>
    </>
  );
}
