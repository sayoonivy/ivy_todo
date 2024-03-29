import React, { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  jwtToken: null,
  setJwtToken: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwtToken, setJwtToken] = useState(null);
  const contextValue = {
    user,
    setUser,
    jwtToken,
    setJwtToken,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
