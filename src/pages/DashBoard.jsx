
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setPhotoURL(user?.photoURL);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (!user) return navigate("/");
    fetchUserData();
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome, {name}</h1>
        {photoURL && (
          <img src={photoURL} alt="User" className="w-20 h-20 rounded-full mx-auto mb-4" />
        )}
        <p>Email: {user?.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
