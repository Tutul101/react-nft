import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Clients from "./components/clients";
import Footer from "./components/footer";
import Free from "./components/free";
import Home from "./components/home";
import Like from "./components/like";
import Navbar from "./components/navbar";
import Release from "./components/release";
import ScrollToTop from "./components/scroll-to-top";
import SignUp from "./components/sign-up";
import SuperRare from "./components/superrare";

import "./scss/index.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    window.setTimeout(() => {
      const home = document.getElementsByClassName("home");
      home[0].style.transform = "none";
      const nav = document.getElementsByClassName("nav-wrapper");
      nav[0].style.transform = "none";
    }, 1500);
    const registerAnimation = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `.nav,.home,.free,.clients,.super-rare,.relases,.like,.signup,footer`,
        { interval: 500 }
      );
    };
    registerAnimation();
  }, []);
  return (
    <div className="app-container" data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
