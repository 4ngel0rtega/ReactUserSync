
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Input, Button, Link as StyleLink } from "@nextui-org/react";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-bold mb-8">Forgot Your Password?</h1>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          size="large"
        />
        <Button
          onClick={handleResetPassword}
          color="primary"
          block
          size="large"
        >
          Send password reset email
        </Button>
        <div>
          Don't have an account? <StyleLink color="success" href="/register">Register</StyleLink> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
