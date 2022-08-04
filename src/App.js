import {ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Theme from "./Thems";
import Navbar from '../src/Components/TopNavbar/Navbar'
import BlogPage from "./Pages/BlogPage";
import BollywoodPage from "./Components/Bollywood/BollywoodPage";
import ReactAnimation from "./Components/ReactAnimationComponent/ReactAnimation";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="/page1" element={<BollywoodPage />} />
    <Route path="/page2" element={<ReactAnimation />} />
    </Routes>  
    </BrowserRouter>
    </ThemeProvider>

  );
};
export default App;
