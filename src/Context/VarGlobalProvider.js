import React, { useState, useEffect } from "react";
import { seeInformationHeader } from "../services/ProfileService";

const VarGlobal = React.createContext({});

export const VarGlobalProvider = ({ children }) => {
  const [variable, setVariable] = useState({
    numberOfNotification: null,
    avatar: null,
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await seeInformationHeader();
        setVariable({
          numberOfNotification: res.numberOfNotification,
          avatar: res.avatar,
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <VarGlobal.Provider value={{ variable, setVariable }}>
      {children}
    </VarGlobal.Provider>
  );
};

export default VarGlobal;
