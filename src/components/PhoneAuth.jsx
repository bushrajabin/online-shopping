import React, { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const PhoneAuth = () => {
  const navigate = useNavigate();
  const [isCodeSent, setIsCodeSent] = useState(false);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Google login error: ", error);
      toast.error("Failed to login with Google. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center ">
      <button
        onClick={googleLogin}
        className="mt-2 items-center p-2 bg-slate-100 flex flex-row"
      >
        <FaGoogle className="size-6 p-1" /> Sign In with Google
      </button>
    </div>
  );
};

export default PhoneAuth;
