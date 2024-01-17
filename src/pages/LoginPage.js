import React, { useState } from "react";
import "./LoginPage.css";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingAnimation from "../components/common/LoadingAnimation";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router";
import { login } from "../services/Node";

//TODO: Set a useEffect here to navigate to "/" if refreshToken passes check
export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser, setJwtToken } = React.useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Username, Password } = e.target;
    const credentials = {
      username: Username.value,
      password: Password.value,
    };

    setLoading(true);

    try {
      const response = await login(credentials);

      if (!response.ok) {
        if (response.status === 401 || response.status === 404) {
          setError("error");
          setLoading(false);
          return;
        }
        setError("?");
        setLoading(false);
        return;
      }

      const { user, token } = response.json();
      setUser(user);
      setJwtToken(token);

      navigate("/");
    } catch (error) {
      setError("network");
      setLoading(false);
      console.error("Login failed: ", error);
    }
  };

  function onChanged() {
    setError("");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login ^^;;</h1>
        <TextField
          type="text"
          autoFocus={true}
          name="Username"
          onChanged={onChanged}
        />
        <TextField
          type="password"
          autoFocus={false}
          name="Password"
          onChanged={onChanged}
        />
        {loading ? <LoadingAnimation isLoading="true" /> : <Button />}
        {error !== "" && <ErrorMessage type={error} />}
      </form>
    </div>
  );
}
