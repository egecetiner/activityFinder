import React from "react"
import { AppContextProvider } from "./src/Context/AppContext";
import Router from "./src/Router/Router";

const App = () => {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;
