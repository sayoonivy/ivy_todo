import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PromotionsPage from "./pages/PromotionsPage";
import NavigationMenu from "./components/layout/NavigationMenu";
import { UserContext } from "./components/UserContext";
import { createUseStyles } from "react-jss";

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

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        {user && <NavigationMenu />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* TODO: Must test this redirect -- or just setup useEffect in LoginPage */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <LoginPage />}
          />
          <Route path="/promotions" element={<PromotionsPage />} />
          {/* <Route path="/tiktok" element={<TikTokPage/>}/> */}
          {/* <Route path="/instagram" element={<InstagramPage/>}/> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
