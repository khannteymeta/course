import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import CoursePage from "./pages/course/CoursePage..jsx";
import PricePage from "./pages/price/PricePage.jsx";
import Contact from "./pages/aboutUs/contact.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import Register from "./pages/auth/Register.jsx";
import ChatBot from "./pages/chatbot/ChatBot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/course",
        element: <CoursePage />,
      },
      {
        path: "/price",
        element: <PricePage />,
      },
      {
        path: "/about",
        element: <Contact />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chatbot",
    element: <ChatBot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
