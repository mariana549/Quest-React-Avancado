import { createContext } from "react";

const Context = createContext({
  pokemon: null,
  type: { type: { name: "fire" } },
  peso: 0,
  altura: 0,
});

export default Context;
