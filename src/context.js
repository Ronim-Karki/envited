import React, { useContext, useState } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(null);
  const [street, setStreet] = useState(null);
  const [name, setName] = useState('');
  const [obj, setObj] = useState({});
  return (
    <AppContext.Provider
      value={{
        startDate,
        setStartDate,
        time,
        setTime,
        street,
        setStreet,
        obj,
        setObj,
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
