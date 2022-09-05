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
        sx={{
          width: { md: "90%", xs: "98%" },
          paddingTop: { xs: "20px", md: "150px" },
          paddingBottom: { xs: "50px", md: "50px" },
        }}
        mx="auto"
      >
        <Box
          sx={{
            width: { md: "900px", xs: "450px" },
            height: { md: "70vh", xs: "50vh" },
            backgroundImage: `url(https://filmfare.wwmindia.com/thumb/content/2022/jun/toptensongsofjubinnautiyalyoumustlistentoonhisbirthday11655189119.jpg?width=1200&height=900)`,
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
           Jubin Nautiyal
          </Typography>
          <Typography
            variant="subtitle1"
            color={"wheat"}
            py={"auto"}
            paddingLeft="50px"
          >
            Travel/ August 19 2022
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
                backgroundImage: `url(https://assets.thehansindia.com/h-upload/feeds/2019/07/08/193862-kiara.jpg)`,
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
                When Kabir Singh opened up a can of worms
              </Typography>
              {/* <Typography
                variant="h5"
                py={"auto"}
                color="white"
                // paddingTop={"150px"}
                paddingLeft="50px"
              >
                You loved is doomed
              </Typography> */}
              <Typography
                variant="subtitle1"
                color={"wheat"}
                py={"auto"}
                paddingLeft="50px"
              >
                Travel/ August 19 2022
              </Typography>
            </Box>
            <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(https://c.ndtvimg.com/2019-07/2k7qj7u_kabir-singh-instagram_625x300_03_July_19.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h6"
                py={"auto"}
                color="white"
                paddingTop={"120px"}
                paddingLeft="50px"
              >
                The film is about to complete its second week at the theatres
              </Typography>
              <Typography
                variant="subtitle1"
                color={"wheat"}
                py={"auto"}
                paddingLeft="50px"
              >
                Travel/ August 19 2022
              </Typography>
            </Box>
          </Box>
        </Hidden>
      </Box>
    </>
  );
};

export default LandingPage;
