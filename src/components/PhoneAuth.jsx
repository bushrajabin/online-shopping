import React, { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase"; // Ensure this is correctly set up
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PhoneAuth = () => {
  const navigate = useNavigate();
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [mynumber, setMynumber] = useState("+91");
  const [otp, setOtp] = useState(""); // State to handle OTP input
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  }, []);

  // This is for send otp when user type their number

  const sendOTP = async () => {
    // Check if the phone number field is empty
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
      toast.success("OTP send on your valid phone Number!")
      setConfirmationResult(result); // Store confirmation result for later use
      setIsCodeSent(true);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  // This is for verify otp
  const verifyOTP = async () => {
    if (!confirmationResult) {
      toast.error("OTP not sent. Please request a new OTP.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      toast.success("congratulations!!")
      navigate("/"); // Navigate to another page or update the UI as necessary
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center ">
      <div className="bg-white p-5 flex flex-col gap-2 items-center rounded-lg shadow-lg">
        {error && <p className="text-red-500 my-3 text-xs">{error}</p>}

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
            <h1 className="text-lg font-bold mb-4">Login with Phone Number</h1>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={mynumber}
              onChange={(e) => setMynumber(e.target.value)}
              className="bg-black-600 p-2 outline-none xl:bg-transparent xl:p-2 xl:font-mono w-full rounded-md border border-gray-300"
            />

            <div id="recaptcha-container" className="id"></div>

            <button
              onClick={sendOTP}
              className="bg-zinc-200 p-2 w-32 rounded-sm"
            >
              Send OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PhoneAuth;
