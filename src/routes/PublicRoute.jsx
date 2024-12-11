import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (user) return <Navigate to={"/dashboard"}></Navigate>;
  return children;
}
