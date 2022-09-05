import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../contextAPI/NewsProvider";

const Post = ({ category }) => {
  const id = useParams().id;
  const [currentPost, setCurrentPost] = useState(null);
  const { home, bollywood, hollywood, fitness, food, technology } =
    useContext(NewsContext);
  useEffect(() => {
    var _data;
    switch (id.slice(0, 2)) {
      case "bw": {
        _data = bollywood?.find((data) => data.id === id);
        break;
      }
      case "hm":
        _data = home?.find((data) => data.id === id);
        break;
      case "hw":
        _data = hollywood?.find((data) => data.id === id);
        break;
      case "th":
        _data = technology?.find((data) => data.id === id);
        break;
      case "fo":
        _data = food?.find((data) => data.id === id);
        break;
      case "ft":
        _data = fitness?.find((data) => data.id === id);
        break;
    }
    if (_data) setCurrentPost(_data);
  }, [id]);
  return (
    <>
      <Box
        sx={{ width: { xs: "100%", md: "98vw" }, paddingTop: "60px" }}
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
        <Box
          style={{
            height: "10vh",
            width: "80vw",
            margin: "auto",
            marginTop: "10vh",
            paddingBottom: "5vh",
          }}
        >
          <h1>{currentPost?.Heading1}</h1>
          <p>{currentPost?.blog}</p>
        </Box>
      </Box>
    </>
  );
};

export default Post;
