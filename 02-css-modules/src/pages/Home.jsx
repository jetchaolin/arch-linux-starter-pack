// import styled from "styled-components";
// import { lightTheme, darkTheme } from "../hooks/themes.js";
// import { useTheme } from "../context/ThemeContext";
import HomeStyle from "./Home.module.css";

function Home() {

  return (
    <section id={HomeStyle.home}>
      <h1 id={HomeStyle.title}>Arch Linux Starter Pack</h1>
    </section>
  );
}

export default Home;
