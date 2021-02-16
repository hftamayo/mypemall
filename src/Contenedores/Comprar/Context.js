import React, { createContext, useState } from 'react';

export const ComprarContext = createContext();

function ComprarProvider(props) {
  const [current, setCurrent] = useState({});

  return (
    <ComprarContext.Provider
      value={{
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </ComprarContext.Provider>
  );
}

export default ComprarProvider;
