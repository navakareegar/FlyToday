import { createContext } from "react";

export const Context = createContext({
  hardCodeData: [],
  setHardCodeData: () => {},
  filters: [],
  setFilters: () => {},
  findAirPortInfo: () => {},
  findAirLineInfo: () => {},
});
