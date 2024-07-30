import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import PhoneAuth from "./components/PhoneAuth";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PhoneAuth" element={<PhoneAuth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

