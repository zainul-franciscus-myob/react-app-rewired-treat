import React from "react";
import * as styles from "./ExternalTreatButton.treat";

const ExternalTreatButton = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default ExternalTreatButton;
