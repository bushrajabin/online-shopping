import { useState } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Items from "./components/product/Items";
import Hero from "./components/Hero/Hero";
function App() {
  return(
    <>
    <Nav/>
    <Hero/>
       <Items />

    </>

  );
}
export default App;
