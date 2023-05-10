import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Admin } from "../Admin";
import { Login } from "../Pages/Login";
import { PrivateRoute, PrivateUser } from "./PrivateRoute";
import { EditPage } from "../Pages/EditPage";
import { ForYou } from "../Pages/ForYou";
import { Discover } from "../Pages/Discover";
import { Live } from "../Pages/Live";
import { Hire } from "../Pages/Hire";
import { Jobs } from "../Pages/Jobs";
//import { ChakraProvider } from "@chakra-ui/react";
import { SignUp } from "../Pages/SignUp";
import { UserLogin } from "../Pages/UserLogin";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/foryou"
        element={
          <PrivateUser>
            <ForYou />
          </PrivateUser>
        }
      />
      <Route path="/discover" element={<Discover />} />
      <Route path="/live" element={<Live />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};
