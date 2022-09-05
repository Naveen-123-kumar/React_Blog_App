import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Components/Bollywood/Component1"

function BollywoodPage() {
    console.log(Data)

    const id = useParams().id;
    const [currentPost, setCurrentPost] = useState(null);
    useEffect(() => {
      const _data = Data.find((data) => data.id === id);
      if (_data) setCurrentPost(_data);
      console.log(_data);
    }, [id]);

  return (
    <Box
        sx={{ width: { xs: "100%", md: "100vw" }, paddingTop: "60px" }}
        // bgcolor={"red"}
      >
        <Box
          sx={{
            width: { md: "1000px", xs: "340px" },
            height: { md: "70vh", xs: "30vh" },
            backgroundImage: `url(${currentPost?.img1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            mx: "auto",
            marginTop: "10vh",
          }}
          borderRadius="10px"
          //   textAlign="left"
        />
        <Box style={{  height: "10vh",width:'80vw',margin:'auto',marginTop: "10vh",paddingBottom:'5vh' }}>
          <h1>{currentPost?.Heading1}</h1>
          <p>{currentPost?.blog}</p>
        </Box>
      </Box>
  )
}

export default BollywoodPage