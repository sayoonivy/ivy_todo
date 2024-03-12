import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  TikTokPage,
  TODOPage,
  StripePage,
} from "./pages/index";
import NavigationMenu from "./components/layout/NavigationMenu";
import { UserContext } from "./components/UserContext";
import { createUseStyles } from "react-jss";
import { useAuthRedirect } from "./hooks/useAuthRedirect";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f6f6ff",
    height: "100vh",
  },
});

export default function AppRouter() {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  // useAuthRedirect();
  return (
    <div className={classes.wrapper}>
      {<NavigationMenu />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stripe" element={<StripePage />} />
        {/* <Route path="/todo" element={<TODOPage />} /> */}
        {/* <Route path="/tiktok" element={<TikTokPage />} /> */}
        {/* <Route path="/instagram" element={<InstagramPage/>}/> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
