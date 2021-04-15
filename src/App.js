import React from "react";
import '@myob/myob-styles/dist/styles/myob-clean.css';
import InternalTreatButton from "./components/InternalTreatButton/InternalTreatButton";
import Badge from "./components/Badge/Badge.js";

function App() {
  return (
    <div className="App">
        <InternalTreatButton>Halo</InternalTreatButton>
        <br/>
        <Badge />
        <Badge color="light-grey">12</Badge>
        <Badge color="green">12</Badge>
        <Badge color="orange">12</Badge>
        <Badge color="red">12</Badge>
        <Badge color="blue">12</Badge>
        <Badge color="purple">12</Badge>
    </div>
  );
}

export default App;
