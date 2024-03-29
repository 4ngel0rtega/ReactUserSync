
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Input, Button, Link as StyleLink } from "@nextui-org/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const handleLogin = async () => {
    try {
      await logInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-bold mb-8">Welcome Back!</h1>
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
          onClick={handleLogin}
          color="primary"
          block
          size="large"
          className="mb-4" // Agrega margen inferior para separar los botones
        >
          Login
        </Button>
        <Button
          onClick={signInWithGoogle}
          block
          size="large"
          className="mt-4" // Agrega margen superior para separar los botones
        >
          Login with Google
        </Button>
        <div className="flex justify-between">
          <StyleLink color="success" href="/Reset">
            Forgot Password?
          </StyleLink>
          <StyleLink color="success" href="/register">
            Register Now
          </StyleLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
