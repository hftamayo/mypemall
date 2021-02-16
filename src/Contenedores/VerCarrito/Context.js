import React, { createContext, useState } from 'react';

export const VerCarritoContext = createContext();

function VerCarritoProvider(props) {
  const [current, setCurrent] = useState({});

  return (
    <VerCarritoContext.Provider
      value={{
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </VerCarritoContext.Provider>
  );
}

export default VerCarritoProvider;
