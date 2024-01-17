import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "../services/Node";
import { UserContext } from "../components/UserContext";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();
  const { setUser, setJwtToken } = React.useContext(UserContext);

  useEffect(() => {
    setUser("Daniel");
  }, [setUser]);
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       const response = await refreshToken();

  //       if (!response.ok) {
  //         if (response.status === 404) {
  //           navigate("/login");
  //           return;
  //         }
  //         navigate("/login");
  //         return;
  //       }

  //       const { user, token } = response.json();

  //       setUser(user);
  //       setJwtToken(token);
  //     } catch (error) {
  //       console.error("Failed fetching token: ", error);
  //       navigate("/login");
  //     }
  //   };

  //   verifyCookie();
  // }, [navigate, setUser, setJwtToken]);

  return (
    <div className="homepage">
      <h1>DASHBOARD COMING SOON</h1>
    </div>
  );
}
