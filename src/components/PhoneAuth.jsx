import React, { useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase/Firebase";

// import { useNavigate } from "react-router-dom";


function PhoneAuth() {
  // const navigate = useNavigate();
  const [mynumber, setMynumber] = useState();
  const [error, setError] = useState("");
  const sendOTP = async () => {
    // Check if the phone number field is empty
    if (!mynumber) {
      setError("Please enter a valid phone number.");
      return;
    }
    try {
      console.log(mynumber)
      const applicationVerifier = new RecaptchaVerifier(auth,'recaptcha-container');

      const confirmation = await signInWithPhoneNumber(auth, '+91'+mynumber, applicationVerifier);
      console.log("Confirmation:", confirmation);
    } catch (error) {
      console.error("Error sending OTP: ", error);
      setError("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-red-200 p-4">
      <h1 className="text-lg font-bold mb-4">Login with Phone Number</h1>
      <div className="bg-white p-5 flex flex-col items-center rounded-lg shadow-lg">
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={mynumber}
          onChange={(e) => setMynumber(e.target.value)}
          className="bg-yellow-600 p-2 outline-none xl:bg-red-800 xl:p-2 xl:font-mono w-full rounded-md border border-gray-300"
        />

        <div id="recaptcha-container"></div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          onClick={sendOTP}
          className="bg-zinc-200 p-2 w-32 rounded-sm mt-3"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default PhoneAuth;
