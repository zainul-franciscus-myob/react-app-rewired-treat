import React from "react";
// import "./App.css";
import { ThemeProvider, productTheme, marketingTheme, Input, Badge, Label } from "@myob/myob-widgets";

function App() {
  return (
      <div>
          <ThemeProvider theme={productTheme}>
              <Input name="default" label="Default Text Input" value="Input" />
              <>
                  <Badge>12</Badge>
                  <Badge color="light-grey">12</Badge>
                  <Badge color="green">12</Badge>
                  <Badge color="orange">12</Badge>
                  <Badge color="red">12</Badge>
                  <Badge color="blue">12</Badge>
                  <Badge color="purple">12</Badge>
              </>
              <>
                  <Label size="small">Label</Label>
                  &nbsp;
                  <Label size="small" color="green">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="small" color="orange">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="small" color="red">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="small" color="blue">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="small" color="purple">
                      Label
                  </Label>
              </>
              <>
                  <Label>Label</Label>
                  &nbsp;
                  <Label color="green">Label</Label>
                  &nbsp;
                  <Label color="orange">Label</Label>
                  &nbsp;
                  <Label color="red">Label</Label>
                  &nbsp;
                  <Label color="blue">Label</Label>
                  &nbsp;
                  <Label color="purple">Label</Label>
              </>
              <>
                  <Label size="large">Label</Label>
                  &nbsp;
                  <Label size="large" color="green">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="large" color="orange">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="large" color="red">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="large" color="blue">
                      Label
                  </Label>
                  &nbsp;
                  <Label size="large" color="purple">
                      Label
                  </Label>
              </>
          </ThemeProvider>
      </div>
  );
}

export default App;
