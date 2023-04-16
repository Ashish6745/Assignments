import Navbar from "./components/Navbar";
import React from "react";
import Head from "./components/Head";
import Events from "./components/Events";
import Message from "./components/Message"
import Features from "./components/Features";
import Contribution from "./components/Contribution";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
        <Navbar/>
        <Head/>
        <Events/>
        <Message/>
        <Features/>
        <Contribution/>
        <Gallery/>
        <Footer/>
    </div>
  );
}

export default App;
