import React from "react";
import { UserProvider } from "./components/UserContext";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserProvider>
  );
}
