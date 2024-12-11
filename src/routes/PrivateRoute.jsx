import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import LoadingScreen from "../pages/LoadingScreen";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const { user, isUserLoading } = useContext(AuthContext);
  if (isUserLoading) return <LoadingScreen />;
  if (!user) return <Navigate state={location.pathname} to={"/auth/login"} />;
  return children;
}
