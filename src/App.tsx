import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Accounts from "./pages/Accounts";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Expenses from "./pages/Expenses";
import SignIn from "./pages/SignIn";

import { useSelector } from "react-redux";

const App = () => {
  const isSignedIn = useSelector((state) => state.authentication.isSignedIn);
  const router = createBrowserRouter([
    {
      element: isSignedIn ? <AppLayout /> : <SignIn />,
      children: [
        {
          path: "/",
          element: isSignedIn ? <Home /> : <Navigate to="/signin" replace />,
        },
        {
          path: "/transactions",
          element: isSignedIn ? (
            <Transaction />
          ) : (
            <Navigate to="/signin" replace />
          ),
        },
        {
          path: "/accounts",
          element: isSignedIn ? (
            <Accounts />
          ) : (
            <Navigate to="/signin" replace />
          ),
        },
        {
          path: "/expenses",
          element: isSignedIn ? (
            <Expenses />
          ) : (
            <Navigate to="/signin" replace />
          ),
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
