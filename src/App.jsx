import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import PhoneAuth from "./components/PhoneAuth";
import Otp from "./components/Otp";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PhoneAuth" element={<PhoneAuth />} />
          <Route path="/otp" element={<Otp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

