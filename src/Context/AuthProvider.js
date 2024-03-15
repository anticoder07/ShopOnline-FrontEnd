import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Kiểm tra xem token có tồn tại trong localStorage không
    const storedToken = localStorage.getItem("auth");
    return storedToken ? JSON.parse(storedToken) : {};
  });

  useEffect(() => {
    // Lưu token vào localStorage khi auth thay đổi
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
