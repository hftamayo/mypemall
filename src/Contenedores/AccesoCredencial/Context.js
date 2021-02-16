import React, { createContext, useState } from 'react';

export const ClientesContext = createContext();

function ClientesProvider(props) {
  const [current, setCurrent] = useState({});

  return (
    <ClientesContext.Provider
      value={{
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </ClientesContext.Provider>
  );
}

export default ClientesProvider;
