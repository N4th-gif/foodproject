import { createContext, useContext } from "react";

export const DataProvider = createContext();

function ContextData() {
  return useContext(DataProvider);
}

export default ContextData;
