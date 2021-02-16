import React, { createContext, useState } from 'react';

export const DetallesCompraContext = createContext();

function DetallesCompraProvider(props) {
  const [current, setCurrent] = useState({});

  return (
    <DetallesCompraContext.Provider
      value={{
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </DetallesCompraContext.Provider>
  );
}

export default DetallesCompraProvider;
