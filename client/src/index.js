import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Ingredients, Coffees, HomePage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="/coffee" element={<Coffees />} />
      <Route path="/ingredient" element={<Ingredients />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
