import React, { createContext, useState } from "react";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const isLoggedIn = !!currentUser;

  return (
    <CurrentUserContext.Provider
      value={{ isLoggedIn, currentUser, setCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
