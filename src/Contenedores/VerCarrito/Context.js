import React, { createContext, useState } from 'react';

export const ProductosContext = createContext();

function ProductosProvider(props) {
  const [current, setCurrent] = useState({});

  return (
    <ProductosContext.Provider
      value={{
        current: [current, setCurrent],
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
}

export default ProductosProvider;
