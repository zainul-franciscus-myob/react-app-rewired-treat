import React from "react";
// import "./App.css";
import { ExternalTreatButton, ThemeProvider, altTheme } from "lib-components";
import InternalTreatButton from "./components/InternalTreatButton";

function App() {
  return (
    <div className="App">
      <h3>Internal app button</h3>
      <InternalTreatButton>Button</InternalTreatButton>
      <h3>lib-components default theme button</h3>
      <ExternalTreatButton>Button</ExternalTreatButton>
      <h3>lib-components alt theme button</h3>
      <ThemeProvider theme={altTheme}>
        <ExternalTreatButton>Button</ExternalTreatButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
