import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-10">⏳ Checking login...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
