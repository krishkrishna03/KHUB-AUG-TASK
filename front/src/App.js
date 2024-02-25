import React from "react";
import "./App.css";
import Header from "./components/head";
import Main from "./components/main"; // Corrected component name
import Footer from "./components/foot";

const App = () => {
  return (
    <>
      <Header />
      <Main /> {/* Using the corrected component name */}
      <Footer />
    </>
  );
};

export default App;
