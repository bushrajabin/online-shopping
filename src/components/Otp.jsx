import React, { useState } from "react";
import OTPInput from "react-otp-input";

function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div>
        <h2>Otp</h2>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        // renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      </div>
    </>
  );
}

export default Otp;
