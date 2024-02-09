
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";
import { Input, Button, Link as StyleLink } from "@nextui-org/react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-bold mb-8">Create an Account</h1>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          size="large"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          size="large"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          size="large"
        />
        <Button
          onClick={register}
          color="primary"
          block
          size="large"
        >
          Register
        </Button>
        <Button
          onClick={signInWithGoogle}
          block
          size="large"
        >
          Register with Google
        </Button>
        <div>
          Already have an account? <StyleLink color="success" href="/login">Login</StyleLink> now.
        </div>
      </div>
    </div>
  );
}

export default Register;
