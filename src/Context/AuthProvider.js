import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedToken = localStorage.getItem("auth");
    return storedToken ? JSON.parse(storedToken) : {};
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
    console.log(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
