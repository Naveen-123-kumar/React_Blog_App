import { Container,Grid,Typography,Box,Hidden,Paper } from '@mui/material'
import React from 'react'
import LatestArticle from './LatestArticle'
import Image1 from '../../Assets/NewBuilding.jpg'
import TopPost from '../LatestStoriesComponent/TopPost'
const MainPage = () => {
  return (
    <>
    <Container maxWidth='xl'>
        <Grid container >
        <Box mx="auto" width="100%" paddingTop="5px" >
          <Typography variant="h4" > Latest Article</Typography>
        </Box>
        <Grid item lg='8' xs={12} bgcolor='lightgray'>
        <LatestArticle/>
        <Hidden smDown>

        <Box paddingTop={2}>

        <Box
          sx={{
            width: { md: "860px", xs: "450px" },
            height: { md: "60vh", xs: "50vh" },
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
        </Box>
        </Hidden>

        </Grid>
            <Grid item lg='4' xs={12} bgcolor='violet' >
            <Hidden smDown>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            marginLeft="20px"
            justifyContent={"space-between"}
            border='1px solid blue'
            borderRadius="10px"
            height={'100vh'}
          >
           <Typography align="center" py='auto' my='auto'>Advertistement</Typography>
          </Box>
          
        </Hidden>

        <Box paddingTop={5} textAlign='left'>
            <Typography variant='h6'>Top Posts</Typography>
        </Box>
        <Hidden>
            <Box>
            <Paper elevation={1} >
  
  {/* <Box sx={{ width: { xs: "100%", md: "100%"},display:{xs:'flex',md:'flex'}}} paddingY='5px' > */}
  <Box
    sx={{
      width: { md: "100%", xs: "160px" },
      height: { md: "35vh", xs: "15vh" },
      backgroundImage: `url(${Image1})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }}
    borderRadius="10px"
    textAlign="left"
  />
  <Box sx={{width:{md:'450px',xs:'200px'}}} paddingBottom='20px' paddingLeft={'10px'}>
    <Typography variant="h6" py={"auto"} >
    <b>Catch Waves with</b>
    </Typography>
    <Typography variant="h6" py={"auto"} >
    <b>an Adventure Guide</b>
    </Typography>
   
    <Box paddingTop={"5px"} paddingBottom="5px">
      <Typography variant="caption text" py={"auto"}>
      <b>Travel</b> / August 19 2017
      </Typography>
    </Box>
  </Box>
  
{/* </Box> */}
</Paper>
            </Box>
        </Hidden>
        <TopPost/>
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default MainPage