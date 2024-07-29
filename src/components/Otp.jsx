import React, { useState } from "react";
import OTPInput from "react-otp-input";

function Otp() {
  const [otp, setOtp] = useState("");
  // const [confirmationResult, setConfirmationResult] = useState(null);

  
  const verifyOTP = async (otp) => {
    if (!confirmationResult) {
      alert("erroor")
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
    <>
      <div className="bg-red-900 text-black ">
        <h2>Otp</h2>
        <OTPInput
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          numInputs={6}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          className=" xl:text-black xl:bg-red-800"
        />

        <button onClick={verifyOTP}>VerifyOTp</button>
      </div>
    </>
  );
}

export default Otp;
