import React from "react";
import { Label, ButtonRow, Button } from "@myob/myob-widgets";

function App() {
  return (
      <div>
          <Label color="default">Label</Label>
          &emsp;
          <Label color="light-grey">Label</Label>
          &emsp;
          <Label color="green">Label</Label>
          &emsp;
          <Label color="orange">Label</Label>
          &emsp;
          <Label color="red">Label</Label>
          &emsp;
          <Label color="blue">Label</Label>
          &emsp;
          <Label color="purple">Label</Label>

          <ButtonRow>
              <Button type="secondary">Cancel</Button>
              <Button>Save</Button>
          </ButtonRow>
      </div>
  );
}

export default App;
