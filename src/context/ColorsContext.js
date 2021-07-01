import React, { createContext, useState } from 'react';

const ColorsContext = createContext();

const ColorsProvider = ({ children }) => {
  const [colors, setColors] = useState([]);

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorsContext.Provider>
  );
};

export { ColorsContext, ColorsProvider };
