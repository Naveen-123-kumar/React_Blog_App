import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/TopNavbar/Navbar";
import ReactAnimation from "./Components/ReactAnimationComponent/ReactAnimation";
import BlogPage from "./Pages/BlogPage";
import BollywoodPage from "./Pages/BollywoodPage/BollywoodPage";
import FitnessPage from "./Pages/FitnessPage/FitnessPage";
import FoodPage from "./Pages/FoodPage/FoodPage";
import HolywoodPage from "./Pages/HolywoodPage/HolywoodPage";
import Post from "./Pages/Post";
import Theme from "./Thems";
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/bollywood" element={<BollywoodPage/>} />
          <Route path="/hollywood" element={<HolywoodPage/>} />
          <Route path="/fitness" element={<FitnessPage/>} />
          <Route path="/food" element={<FoodPage/>} />
          <Route path="/technology" element={<ReactAnimation />} />
          <Route path="/home/:id" element={<Post />} />
          <Route path="/bollywood/:id" element={<Post />} />
          <Route path="/hollywood/:id" element={<Post />} />
          <Route path="/food/:id" element={<Post />} />
          <Route path="/fittness/:id" element={<Post />} />
          <Route path="/technology/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
