import React from "react";
import ProductAsClass from "../Product/ProductAsClass";
import ProductAsFunction from "../Product/ProductAsFunction";

function App() {
  return (
    <React.Fragment>
      <ProductAsClass />
      <hr />
      <ProductAsFunction />
    </React.Fragment>
  );
}

export default App;
