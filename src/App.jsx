import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import PhoneAuth from "./components/PhoneAuth";
import Profile from "./components/Profile";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PhoneAuth" element={<PhoneAuth />} />
          <Route path="/Profile" element={<Profile />} />
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
