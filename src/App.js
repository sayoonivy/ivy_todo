import React from "react";
import { UserProvider } from "./components/UserContext";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}
