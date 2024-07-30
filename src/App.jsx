import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import PhoneAuth from "./components/PhoneAuth";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PhoneAuth" element={<PhoneAuth />} />
        </Routes>
      </BrowserRouter>

{/* This is for toastify */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
export default App;
