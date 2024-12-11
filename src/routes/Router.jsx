import { createBrowserRouter } from "react-router-dom";

import ForgetPassword from "../components/ForgetPassword";
import Setting from "../components/Setting";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Main from "../layouts/Main";
import Campaigns from "../pages/Campaigns";
import CampaingnsDetails from "../pages/CampaingnsDetails";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Help from "../pages/Help";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "setting",
        element: (
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        ),
      },

      {
        path: "campaigns/:division",
        element: <Campaigns />,
        loader: () => fetch("../data/campaign.json"),
      },
      {
        path: "details/:campaignID",
        element: (
          <PrivateRoute>
            <CampaingnsDetails></CampaingnsDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "auth/login",
        element: (
          <PublicRoute>
            <Signin />
          </PublicRoute>
        ),
      },
      {
        path: "auth/create",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
