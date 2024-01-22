/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Khalid Elmaria",
  title: "Flutter Dev & AI Engineer",
  email: "khalidmaria13@gmail.com",
  gitHub: "https://github.com/KhalidEl-MariAa",
  instagram: "https://www.instagram.com/khalid_aymaan?igsh=MTF4ZTJ4bjFodmYybA==",
  linkedIn:
    "https://www.linkedin.com/in/khalid-el-maria-953817215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  medium: "",
  twitter: "https://x.com/khalid_elmaria?t=hMdx-R8P52NHAY6CmqBEgQ&s=09",
  youTube: "",
};

const primaryColor = "#ffffff";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
