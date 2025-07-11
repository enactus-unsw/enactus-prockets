import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import OurMission from "../pages/OurMission";
import OurServices from "../pages/OurServices";
import OurProducts from "../pages/OurProducts";
import Events from "../pages/Events";
import Support from "../pages/Support";
import ContactUs from "../pages/ContactUs";

import Header from "../components/header"; 
import PageWrapper from "../components/animations/page-wrapper";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

function AnimatedRoutes() {
  const location = useLocation();

  function handleExitComplete() {
  if(location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  } 
  window.scrollTo(0, 0);
}

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <Routes location={location} key={location.pathname + location.hash}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about-us/mission" element={<PageWrapper><OurMission /></PageWrapper>} />
        <Route path="/about-us/services" element={<PageWrapper><OurServices /></PageWrapper>} />
        <Route path="/about-us/products" element={<PageWrapper><OurProducts /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
        <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter >
        <Header />
        <AnimatedRoutes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
