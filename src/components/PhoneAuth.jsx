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
  const [mynumber, setMynumber] = useState("+91");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/profile");
      }
    });

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved
        },
        "expired-callback": () => {
          // Response expired
        },
      }
    );

    return () => unsubscribe();
  }, [navigate]);

  const sendOTP = async () => {
    if (!mynumber || mynumber.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    try {
      const result = await signInWithPhoneNumber(
        auth,
        mynumber,
        window.recaptchaVerifier
      );
      toast.success("OTP sent to your phone number!");
      setConfirmationResult(result);
      setIsCodeSent(true);
      setError("");
    } catch (err) {
      console.error("Error sending OTP: ", err);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const verifyOTP = async () => {
    if (!confirmationResult) {
      toast.error("OTP not sent. Please request a new OTP.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      toast.success("Congratulations! You are logged in.");
      navigate("/");
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error("Invalid OTP. Please try again.");
    }
  };

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
      <div className="bg-white p-4 flex flex-col gap-2 items-center rounded-lg shadow-lg">
        {error && <p className="text-red-500 m-3 text-xs">{error}</p>}
        {isCodeSent ? (
          <>
            <h1>OTP</h1>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-transparent p-2 outline-none xl:bg-transparent xl:p-2 xl:font-mono w-full rounded-md border border-gray-300 mt-3"
            />
            <button
              onClick={verifyOTP}
              className="bg-zinc-200 p-2 w-32 rounded-sm mt-3"
            >
              Verify OTP
            </button>
          </>
        ) : (
          <>
            <div className=" flex flex-col items-center lg:flex lg:flex-col  lg:items-center lg:p-2">
              <h1 className="text-lg font-bold mb-4">
                Login with Phone Number
              </h1>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={mynumber}
                onChange={(e) => setMynumber(e.target.value)}
                className="bg-black-600 p-2 outline-none xl:bg-transparent xl:p-2 xl:font-mono w-full rounded-md border border-gray-300"
              />
              <div id="recaptcha-container"></div>
              <button
                onClick={sendOTP}
                className="bg-zinc-200 p-2 w-32 mt-2 rounded-sm"
              >
                Send OTP
              </button>
            </div>

            <div className="lg:flex lg:flex-col">
              <h2>-----------Or-------------</h2>
              <button
                onClick={googleLogin}
                className="mt-2 items-center p-2 bg-slate-100 flex flex-row"
              >
                <FaGoogle className="size-6 p-1" /> Sign In with Google
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhoneAuth;
