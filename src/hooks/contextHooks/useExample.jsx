import React, { useContext } from "react";
import ExampleContext from "../../context/ExampleContext";

const useExample = () => {
  const context = useContext(ExampleContext);

  if (!context) {
    throw new Error("useExample must be used within an AuthProvider");
  }

  return context;
};

export default useExample;
