import React, { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase"; // Ensure this is correctly set up
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const PhoneAuth = () => {
  const navigate = useNavigate();
  const [mynumber, setMynumber] = useState("+91");
  const [error, setError] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  // const [confirmationResult, setConfirmationResult] = useState(null);

  console.log(isCodeSent);

  const appVerifier = window.recaptchaVerifier;

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

  const sendOTP = async () => {
    // Check if the phone number field is empty
    if (!mynumber || mynumber.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    signInWithPhoneNumber(auth, mynumber, appVerifier)
      .then((result) => {
        console.log("result ", result);
        alert("code sent", result);
        setIsCodeSent(true);
        // navigate('/otp')
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const verifyOTP = async (otp) => {
    if (!confirmationResult) {
      alert("erroor");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      console.log(result);
      console.log("User signed in successfully:", result.user);
      // Navigate to another page or update the UI as necessary
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-red-200 p-4">
      <h1 className="text-lg font-bold mb-4">Login with Phone Number</h1>

      <div className="bg-white p-5 flex flex-col gap-2 items-center rounded-lg shadow-lg">
        {error && <p className="text-red-500  my-3 text-xs ">{error}</p>}
        {/* Add input for OTP and a button to verify */}
        {isCodeSent ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => verifyOTP(e.target.value)}
              className="bg-yellow-600 p-2 outline-none xl:bg-red-800 xl:p-2 xl:font-mono w-full rounded-md border border-gray-300 mt-3"
            />
            <button
              onClick={() =>
                verifyOTP(document.querySelector('input[type="text"]').value)
              }
              className="bg-zinc-200 p-2 w-32 rounded-sm mt-3"
            >
              Verify OTP
            </button>
          </>
        ) : (
          <>
                  <div id="recaptcha-container" className="id"></div>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={mynumber}
              onChange={(e) => setMynumber(e.target.value)}
              className="bg-black-600 p-2 outline-none xl:bg-red-800 xl:p-2 xl:font-mono w-full rounded-md border border-gray-300"
            />
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
