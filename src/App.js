import React, { useEffect, useState } from "react";
import "./App.css";
import { dataInput } from "./Data/Data";
import Home from "./Page/Home.jsx";
import Detail from "./Page/Detail.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const baseUrl = `https://aamras.com/dummy/EmployeeDetails.json`;

const App = () => {
  const [employeeData, setEmployeeData] = useState(dataInput);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home employeeData={employeeData} />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
