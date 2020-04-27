import React, { useState } from "react";
import "./App.css";
import PlayList from "./pages/PlayList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const themes = {
  green: "rgb(20, 97, 75)",
  pink: "rgb(241, 107, 107)",
  blue: "rgb(52, 152, 219)",
  purple: "rgb(73, 64, 170)",
  orange: "rgb(250, 121, 0)",
};

export default function App() {
  const [theme, setTheme] = useState(themes.green);

  return (
    <div style={{ backgroundColor: theme }}>
      <NavBar theme={theme} setTheme={setTheme}></NavBar>
      <PlayList></PlayList>
      <Footer></Footer>
    </div>
  );
}
