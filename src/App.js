import {ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Theme from "./Thems";
import Home from "./Components/Home";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Navbar from "./Components/TopNavbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import PaperComponent from "./Components/LatestComponent/PaperComponent";
import LatestArticle from "./Components/LatestArticleComponent/LatestArticle";
import LatestPaper from "./Components/LatestStoriesComponent/LatestPaper";
import BlogPage from "./Pages/BlogPage";
import BollywoodPage from "./Components/Bollywood/BollywoodPage";
import ReactAnimation from "./Components/ReactAnimationComponent/ReactAnimation";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
    {/* <ReactAnimation/> */}
    <BlogPage/>
    {/* <BollywoodPage/> */}
      {/* <Navbar/>
      <LandingPage/>
      <PaperComponent/>
      <LatestArticle/>
      <LatestPaper/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes> */}
    </BrowserRouter>
    </ThemeProvider>

  );
};
export default App;
