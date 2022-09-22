import React, { useContext, useState } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);
  const [street, setStreet] = useState(null);
  const [obj, setObj] = useState({});
  return (
    <AppContext.Provider
      value={{ value, setValue, time, setTime, street, setStreet, obj, setObj }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
