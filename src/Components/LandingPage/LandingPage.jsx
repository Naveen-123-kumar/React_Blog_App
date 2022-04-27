import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/Nature.jpg";
import Image2 from "../../Assets/Mountian.jpg";

const LandingPage = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"row"}
        width="90%"
        sx={{width:{md:'90%',xs:'98%'},paddingTop:{xs:'20px',md:'50px'},paddingBottom:{xs:'50px',md:'50px'}}}
        // paddingY={"50px"}
        mx='auto'
      >
        <Box
          sx={{
            width: { md: "900px", xs: "450px" },
            height: { md: "70vh", xs: "50vh" },
            backgroundImage: `url(${Image1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          borderRadius="10px"
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
        <Hidden smDown>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            paddingLeft="20px"
            justifyContent={"space-between"}
            borderRadius="10px"
          >
            <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(${Image2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h5"
                py={"auto"}
                color="white"
                paddingTop={"100px"}
                paddingLeft="50px"
              >
                The Sound cloud
              </Typography>
              <Typography
                variant="h5"
                py={"auto"}
                color="white"
                // paddingTop={"150px"}
                paddingLeft="50px"
              >
                You loved is doomed
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
            <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(${Image2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h5"
                py={"auto"}
                color="white"
                paddingTop={"120px"}
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
      </Box>
    </>
  );
};

export default LandingPage;
