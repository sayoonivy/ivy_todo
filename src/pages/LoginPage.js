import React, { useState } from "react";
import "./LoginPage.css";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import ErrorMessage from "../components/common/ErrorMessage";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router";
import { login } from "../services/Node";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser, setJwtToken } = React.useContext(UserContext);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("huh");

    // const { Username, Password } = e.target;
    // const credentials = {
    //   username: Username.value,
    //   password: Password.value,
    // };

    // try {
    //   const response = await login(credentials);

    //   if (!response.ok) {
    //     handleResponseError(response);
    //     return;
    //   }
    // } catch (error) {
    //   console.error("Login failed: ", error);
    // }
  };

  function onChanged() {
    console.log("Running function");
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
        <Button />
        {error !== "" && <ErrorMessage type={error} />}
      </form>
    </div>
  );
}
