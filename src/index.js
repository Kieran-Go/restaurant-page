// Style imports
import "./css/normalize.css";
import "./css/styles.css";

// Script imports
import loadHome from "./load-home.js";
import loadAbout from "./load-about.js";

// Load the home page upon init
loadHome();

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => loadHome());

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => loadAbout());
