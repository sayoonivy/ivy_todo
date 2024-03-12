import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export function useAuthRedirect() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!user && location.pathname !== "/login") {
    navigate("/login");
    return;
  }

  if (user && location.pathname === "/login") {
    navigate("/");
    return;
  }
}
