import React from "react";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="bg-white p-4 flex flex-col gap-2 items-center rounded-lg shadow-lg">
        <h1 className="text-lg font-bold mb-4">User Profile</h1>
        <p>
          Welcome,{" "}
          {auth.currentUser ? auth.currentUser.displayName || "User" : "Guest"}!
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 p-2 text-white rounded-sm mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
