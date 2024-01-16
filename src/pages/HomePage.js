import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "../services/Node";
import { UserContext } from "../components/UserContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { setUser, setJwtToken } = React.useContext(UserContext);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const response = await refreshToken();
        const { user, token } = response;

        setUser(user);
        setJwtToken(token);
      } catch (error) {
        console.error("Failed fetching token: ", error);
        navigate("/login");
      }
    };

    verifyCookie();
  }, [navigate, setUser, setJwtToken]);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}
