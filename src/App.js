import React from "react";
// import "./App.css";
import { ExternalTreatButton } from "lib-components";
import InternalTreatButton from './components/InternalTreatButton';

function App() {
  return (
    <div className="App">
      <ExternalTreatButton>External lib button</ExternalTreatButton>
      <InternalTreatButton>Internal lib button</InternalTreatButton>
    </div>
  );
}

export default App;
