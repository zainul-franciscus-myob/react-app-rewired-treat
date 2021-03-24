import React from "react";
import { useStyles } from "./ThemeProvider";
import * as styleRefs from "./ExternalTreatButton.treat";

const ExternalTreatButton = ({ children }) => {
  const styles = useStyles(styleRefs);
  return <button className={styles.button}>{children}</button>;
};

export default ExternalTreatButton;
