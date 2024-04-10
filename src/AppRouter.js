import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, StripePage } from "./pages/index";
import NavigationMenu from "./components/layout/NavigationMenu";
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

  return (
    <div className={classes.wrapper}>
      {<NavigationMenu />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stripe" element={<StripePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
