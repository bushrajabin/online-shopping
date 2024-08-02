// src/components/UserProfile.js
import React from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/Firebase";

const UserProfile = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully.");
      onLogout(); // Call the parent function to update the state
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold mb-4">User Profile</h1>
      <p>Phone Number: {user.phoneNumber}</p>
      {/* Display other user information as needed */}
      <button
        onClick={handleLogout}
        className="bg-zinc-200 p-2 w-32 rounded-sm mt-3"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
