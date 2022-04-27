import { Box, Paper, Hidden, Typography,Grid } from "@mui/material";
import React from "react";
import Image1 from "../../Assets/Nature.jpg";
const Data=[
  {
    img1: Image1,
    Heading1: "Catch Waves with",
    Heading2: "an Adventure Guide",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
  {
    img1: Image1,
    Heading1: "Joshua Tree",
    Heading2: "Overnight Adventure",
    sub1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit hfoerouhfodsihgpd hga",
    subh1: "Travel",
    date1: "/ August 19 2017",
  },
]
const LatestArticle = () => {
  return (
    <>
    <Cards Data={Data}></Cards>
    {/* <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"row"}
        width="100%"
        paddingY={"20px"}
      >
         
        <Paper elevation={0}>

          <Box sx={{ width: { xs: "100%", md: "100%"},display:{xs:'flex',md:'flex'},flexDirection:{xs:'row',md:'row' }}} >
          <Box
            sx={{
              width: { md: "250px", xs: "160px" },
              height: { md: "30vh", xs: "25vh" },
              backgroundImage: `url(${Image1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box sx={{width:{md:'450px',xs:'200px'}}}>
            <Typography variant="h5" py={"auto"} paddingLeft="20px">
              Joshua Tree
            </Typography>
            <Typography variant="h5" py={"auto"} paddingLeft="20px">
              Overnight Adventure
            </Typography>
            <Typography variant="subtitle2" py={"auto"} paddingLeft="20px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
             
            </Typography>
            <Box paddingTop={"20px"} paddingBottom="15px">
              <Typography variant="subtitle1" py={"auto"} paddingLeft="20px">
                <b>Travel</b> / August 19 2017
              </Typography>
            </Box>
          </Box>
          
      </Box>
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
      </Paper>

          {/* </Box> 
        
        <Hidden smDown>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            marginLeft="20px"
            justifyContent={"space-between"}
            border='1px solid blue'
            borderRadius="10px"
          >
           <Typography align="center" py='auto' my='auto'>Advertistement</Typography>
          </Box>
          
        </Hidden>

      </Box> */}
      
    </>
  )
}
const Cards=(props)=>{
  const listitems=props.Data.map((card)=>(
    <Paper elevation={0}>

    <Box sx={{ width: { xs: "100%", md: "100%"},display:{xs:'flex',md:'flex'},flexDirection:{xs:'row',md:'row' }}} >
    <Box
      sx={{
        width: { md: "255px", xs: "160px" },
        height: { md: "22vh", xs: "15vh" },
        backgroundImage: `url(${Image1})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      borderRadius="10px"
      textAlign="left"
    />
    <Box sx={{width:{md:'450px',xs:'200px'}}}>
      <Typography variant="h5" py={"auto"} paddingLeft="20px">
      <b>{card.Heading1}</b>
      </Typography>
      <Typography variant="h5" py={"auto"} paddingLeft="20px">
        Overnight Adventure
      </Typography>
      <Typography variant="subtitle2" py={"auto"} paddingLeft="20px">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
       
      </Typography>
      <Box paddingTop={"20px"} paddingBottom="15px">
        <Typography variant="subtitle1" py={"auto"} paddingLeft="20px">
          <b>Travel</b> / August 19 2017
        </Typography>
      </Box>
    </Box>
    
</Box>
</Paper>
  ));
  return (
    <>
    <Grid container spacing={6}>
        {listitems}
      </Grid>
    </>
  )
}
export default LatestArticle