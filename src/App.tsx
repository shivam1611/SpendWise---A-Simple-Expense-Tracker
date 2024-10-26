import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Accounts from "./pages/Accounts";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Expenses from "./pages/Expenses";

const App = () => {
  const router = createBrowserRouter([
    {
     
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path: "/transactions",
          element: <Transaction />,
        },
        {
          path: "/accounts",
          element: <Accounts />,
        },
        {
          path: "/expenses",
          element: <Expenses/>,
        },
      ]
    },
    
   
  ]);

  return <RouterProvider router={router} />;
};
export default App;
